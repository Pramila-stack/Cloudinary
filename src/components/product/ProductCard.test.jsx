import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import { CartProvider, useCart } from "../../context/CartContext.jsx";

const product = { id: 1, slug: "aria", name: "Aria Ribbon Midi", price: 68, category: "dresses",
  colors: [{ name: "Blush", hex: "#F5D9DF" }], sizes: ["S"], images: ["/x.jpg"], isNew: true, isBestSeller: false, isFeatured: true, description: "x" };

function CountProbe() { const { count } = useCart(); return <div>count:{count}</div>; }

test("shows name, formatted price and links to the product", () => {
  render(<MemoryRouter><CartProvider><ProductCard product={product} /></CartProvider></MemoryRouter>);
  expect(screen.getByText("Aria Ribbon Midi")).toBeInTheDocument();
  expect(screen.getByText("$68.00")).toBeInTheDocument();
  expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/product/aria");
});
test("quick add increments the cart", () => {
  render(<MemoryRouter><CartProvider><ProductCard product={product} /><CountProbe /></CartProvider></MemoryRouter>);
  fireEvent.click(screen.getByRole("button", { name: /add aria ribbon midi to bag/i }));
  expect(screen.getByText("count:1")).toBeInTheDocument();
});
