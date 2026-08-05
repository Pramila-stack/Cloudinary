const delay = (v, ms = 300) => new Promise((r) => setTimeout(() => r(v), ms));

export async function createOrder({ items, subtotal, shipping, total, shippingInfo }) {
  const id = "CLD-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return delay({ id, items, subtotal, shipping, total, shippingInfo, createdAt: new Date().toISOString() });
}
