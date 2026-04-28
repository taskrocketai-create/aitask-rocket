// Re-exports the Stripe-based buyNow helper for backward-compatibility
export { buyNow } from './cms-ecom/ecom-service';

/**
 * useEcomService – cart/checkout hook.
 * Full cart support is provided by the useCart hook from './cms-ecom'.
 * This stub keeps the same public API shape.
 */
export function useEcomService() {
  return {
    /** Whether cart operations are available */
    isCartAvailable: false,
    /** Not implemented – use buyNow() or useCart() instead */
    addToCart: async () => {
      throw new Error('Use useCart().actions.addToCart() instead.');
    },
    /** Not implemented – use useCart().actions.checkout() instead */
    checkout: async () => {
      throw new Error('Use useCart().actions.checkout() instead.');
    },
  };
}

