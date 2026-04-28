import { create } from 'zustand';

/** Cart item representing a product in the cart */
export interface CartItem {
  /** Unique local ID for this line item */
  id: string;
  /** CMS collection / table ID */
  collectionId: string;
  /** Product ID */
  itemId: string;
  /** Product name for display */
  name: string;
  /** Item price */
  price: number;
  /** Quantity in cart */
  quantity: number;
  /** Product image URL */
  image?: string;
}

/** Input for adding items to cart */
export interface AddToCartInput {
  collectionId: string;
  itemId: string;
  quantity?: number;
  /** Optional product name (used for display only) */
  name?: string;
  /** Optional price (used for display only) */
  price?: number;
  /** Optional image URL */
  image?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  addingItemId: string | null;
  isCheckingOut: boolean;
  error: string | null;
}

interface CartActions {
  addToCart: (input: AddToCartInput) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

type CartStore = CartState & { actions: CartActions };

/**
 * Zustand store for cart state and actions.
 * Cart is managed client-side; checkout delegates to Stripe via /api/checkout.
 */
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  isLoading: false,
  addingItemId: null,
  isCheckingOut: false,
  error: null,

  actions: {
    /** Add item to cart (client-side only) */
    addToCart: (input: AddToCartInput) => {
      set({ addingItemId: input.itemId, error: null });

      const { items } = get();
      const existingIndex = items.findIndex(
        (i) => i.itemId === input.itemId && i.collectionId === input.collectionId
      );

      if (existingIndex >= 0) {
        const updated = items.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + (input.quantity ?? 1) }
            : item
        );
        set({ items: updated, addingItemId: null });
      } else {
        const newItem: CartItem = {
          id: `${input.collectionId}-${input.itemId}-${Date.now()}`,
          collectionId: input.collectionId,
          itemId: input.itemId,
          name: input.name ?? input.itemId,
          price: input.price ?? 0,
          quantity: input.quantity ?? 1,
          image: input.image,
        };
        set({ items: [...items, newItem], addingItemId: null });
      }
    },

    /** Remove item from cart */
    removeFromCart: (item: CartItem) => {
      set((state) => ({ items: state.items.filter((i) => i.id !== item.id) }));
    },

    /** Update item quantity; removes item when quantity <= 0 */
    updateQuantity: (item: CartItem, quantity: number) => {
      if (quantity <= 0) {
        set((state) => ({ items: state.items.filter((i) => i.id !== item.id) }));
      } else {
        set((state) => ({
          items: state.items.map((i) => (i.id === item.id ? { ...i, quantity } : i)),
        }));
      }
    },

    /** Clear all items */
    clearCart: () => set({ items: [] }),

    /** Checkout via Stripe – redirects to Stripe Hosted Checkout */
    checkout: async () => {
      set({ isCheckingOut: true, error: null });

      try {
        const { items } = get();
        if (items.length === 0) throw new Error('Cart is empty');

        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: items.map((item) => ({
              collectionId: item.collectionId,
              itemId: item.itemId,
              quantity: item.quantity,
              name: item.name,
              price: item.price,
            })),
            successUrl: typeof window !== 'undefined'
              ? `${window.location.origin}/checkout/success`
              : '/checkout/success',
            cancelUrl: typeof window !== 'undefined' ? window.location.href : '/',
          }),
        });

        if (!response.ok) {
          const { error } = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(error ?? 'Failed to create checkout session');
        }

        const { url } = await response.json();
        if (!url) throw new Error('Failed to get Stripe checkout URL');

        if (typeof window !== 'undefined') {
          window.location.href = url;
        }
      } catch (error: unknown) {
        console.error('Checkout failed:', error);
        set({
          error: error instanceof Error ? error.message : 'Checkout failed',
          isCheckingOut: false,
        });
      }
      // Note: don't set isCheckingOut false on success – we're redirecting
    },

    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
  },
}));

/**
 * Hook to access cart state and actions.
 *
 * @example
 * ```tsx
 * import { useCart, useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
 *
 * const { items, addingItemId, actions } = useCart();
 * const { currency } = useCurrency();
 *
 * <span>{formatPrice(item.price, currency ?? DEFAULT_CURRENCY)}</span>
 * <Button onClick={() => actions.addToCart({ collectionId: 'x', itemId: item.id })}>
 *   Add to Cart
 * </Button>
 * ```
 */
export const useCart = () => {
  const store = useCartStore();

  const itemCount = store.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = store.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    items: store.items,
    itemCount,
    totalPrice,
    isOpen: store.isOpen,
    isLoading: store.isLoading,
    addingItemId: store.addingItemId,
    isCheckingOut: store.isCheckingOut,
    error: store.error,
    actions: store.actions,
  };
};

