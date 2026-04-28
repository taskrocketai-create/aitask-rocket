/**
 * Buy now – skips the cart and goes directly to Stripe Checkout.
 * Creates a Checkout Session via the /api/checkout endpoint and redirects.
 *
 * NOTE: Always show a loading state – this redirects and takes time!
 *
 * @param items - Array of items with collectionId, itemId, and optional quantity
 *
 * @example
 * ```tsx
 * const [isLoading, setIsLoading] = useState(false);
 *
 * const handleBuyNow = async () => {
 *   setIsLoading(true);
 *   await buyNow([{
 *     collectionId: 'products',
 *     itemId: 'product-123',
 *     quantity: 1
 *   }]);
 *   // Note: Page will redirect, loading state won't reset
 * };
 * ```
 */
export async function buyNow(
  items: Array<{ collectionId: string; itemId: string; quantity?: number }>
): Promise<void> {
  if (items.length === 0) {
    throw new Error('At least one item is required for checkout');
  }

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items,
      successUrl: typeof window !== 'undefined' ? `${window.location.origin}/checkout/success` : '/checkout/success',
      cancelUrl: typeof window !== 'undefined' ? window.location.href : '/',
    }),
  });

  if (!response.ok) {
    const { error } = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error ?? 'Failed to create checkout session');
  }

  const { url } = await response.json();

  if (!url) {
    throw new Error('Failed to get Stripe checkout URL');
  }

  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

