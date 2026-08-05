import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext.jsx";
import Shop from "./Shop.jsx";

test("shop lists products and honors a category query", async () => {
  render(
    <MemoryRouter initialEntries={["/shop?category=dresses"]}>
      <CartProvider><Shop /></CartProvider>
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getAllByRole("link").length).toBeGreaterThan(0));
  // "Dresses" appears in the header accent and the active filter chip.
  expect(screen.getAllByText(/dresses/i).length).toBeGreaterThanOrEqual(1);
});
