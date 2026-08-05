import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "../context/CartContext.jsx";
import Checkout from "./Checkout.jsx";

const product = { id: 1, slug: "aria", name: "Aria", price: 68, images: ["/x.jpg"] };
function Seeder() { const { addItem } = useCart(); return <button onClick={() => addItem(product, { color: "Blush", size: "S", qty: 1 })}>seed</button>; }

test("blocks placing an order until required fields are filled", async () => {
  render(
    <MemoryRouter initialEntries={["/checkout"]}>
      <CartProvider>
        <Seeder />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order/:id" element={<div>Order placed</div>} />
        </Routes>
      </CartProvider>
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText("seed"));
  fireEvent.click(screen.getByRole("button", { name: /place order/i }));
  expect(await screen.findByText(/please fill/i)).toBeInTheDocument();
});
