import Stripe from 'stripe';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const stripe = new Stripe("", {
  apiVersion: "2025-06-30.basil"
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      items,
      successUrl,
      cancelUrl
    } = body;
    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: "At least one item is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const stripeKey = undefined                                 ;
    if (!stripeKey) {
      return new Response(
        JSON.stringify({ error: "Stripe is not configured. Set the STRIPE_SECRET_KEY environment variable." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }
    const lineItems = items.map((item) => {
      const unitAmount = item.unitAmount ?? Math.round((item.price ?? 0) * 100);
      return {
        quantity: item.quantity ?? 1,
        price_data: {
          currency: undefined                               ?.toLowerCase() ?? "usd",
          unit_amount: unitAmount,
          product_data: {
            name: item.name ?? item.itemId,
            ...item.image ? { images: [item.image] } : {},
            metadata: {
              collectionId: item.collectionId,
              itemId: item.itemId
            }
          }
        }
      };
    });
    const baseUrl = undefined                                ?? "";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: successUrl ?? `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl ?? `${baseUrl}/`
    });
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
