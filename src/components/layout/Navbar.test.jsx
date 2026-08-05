import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { CartProvider } from "../../context/CartContext.jsx";

test("navbar shows the logo and a cart link", () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </MemoryRouter>
  );
  expect(screen.getByText("Cloudine")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
});
