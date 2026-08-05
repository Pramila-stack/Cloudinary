import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "../context/CartContext.jsx";
import ProductDetail from "./ProductDetail.jsx";

function CountProbe() { const { count } = useCart(); return <div>count:{count}</div>; }

function renderAt(slug) {
  return render(
    <MemoryRouter initialEntries={[`/product/${slug}`]}>
      <CartProvider>
        <Routes><Route path="/product/:slug" element={<><ProductDetail /><CountProbe /></>} /></Routes>
      </CartProvider>
    </MemoryRouter>
  );
}

test("renders product and adds to bag with selected variant", async () => {
  renderAt("aria-ribbon-midi");
  await waitFor(() => expect(screen.getByText("Aria Ribbon Midi")).toBeInTheDocument());
  // The main CTA renders before the related-products grid (whose cards also have
  // "Add to bag" buttons), so the first match is this product's own button.
  fireEvent.click(screen.getAllByRole("button", { name: /add to bag/i })[0]);
  expect(screen.getByText("count:1")).toBeInTheDocument();
});
