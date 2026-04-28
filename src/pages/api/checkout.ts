import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-06-30.basil',
});

export interface CheckoutItem {
  collectionId: string;
  itemId: string;
  quantity?: number;
  /** Product display name */
  name?: string;
  /** Unit price in smallest currency unit (e.g. cents for USD) */
  unitAmount?: number;
  /** Unit price as a decimal string (e.g. "9.99") – converted to smallest unit automatically */
  price?: number;
  image?: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      items,
      successUrl,
      cancelUrl,
    }: { items: CheckoutItem[]; successUrl?: string; cancelUrl?: string } = body;

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'At least one item is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return new Response(
        JSON.stringify({ error: 'Stripe is not configured. Set the STRIPE_SECRET_KEY environment variable.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      // Price in smallest currency unit (cents for USD)
      const unitAmount = item.unitAmount ?? Math.round((item.price ?? 0) * 100);

      return {
        quantity: item.quantity ?? 1,
        price_data: {
          currency: import.meta.env.PUBLIC_CURRENCY?.toLowerCase() ?? 'usd',
          unit_amount: unitAmount,
          product_data: {
            name: item.name ?? item.itemId,
            ...(item.image ? { images: [item.image] } : {}),
            metadata: {
              collectionId: item.collectionId,
              itemId: item.itemId,
            },
          },
        },
      };
    });

    const baseUrl = import.meta.env.PUBLIC_SITE_URL ?? '';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: successUrl ?? `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl ?? `${baseUrl}/`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Stripe checkout error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
