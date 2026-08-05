import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider, useCart } from "../context/CartContext.jsx";
import Cart from "./Cart.jsx";

const product = { id: 1, slug: "aria", name: "Aria", price: 68, images: ["/x.jpg"] };
function Seeder() { const { addItem } = useCart(); return <button onClick={() => addItem(product, { color: "Blush", size: "S", qty: 1 })}>seed</button>; }

test("empty cart shows an invitation", () => {
  render(<MemoryRouter><CartProvider><Cart /></CartProvider></MemoryRouter>);
  expect(screen.getByText(/your bag is empty/i)).toBeInTheDocument();
});
test("shows a line item and $6 shipping after seeding a $68 item", () => {
  render(<MemoryRouter><CartProvider><Seeder /><Cart /></CartProvider></MemoryRouter>);
  fireEvent.click(screen.getByText("seed"));
  expect(screen.getByText("Aria")).toBeInTheDocument();
  expect(screen.getByText("$6.00")).toBeInTheDocument();
});
