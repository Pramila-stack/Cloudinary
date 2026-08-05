import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import QuantityStepper from "./QuantityStepper.jsx";

const wrap = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

test("button renders a link when 'to' is provided", () => {
  wrap(<Button to="/shop">Shop</Button>);
  expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute("href", "/shop");
});
test("section header shows title and accent word", () => {
  wrap(<SectionHeader title="Featured" accent="collection" />);
  expect(screen.getByText("Featured")).toBeInTheDocument();
  expect(screen.getByText("collection")).toBeInTheDocument();
});
test("quantity stepper increments and respects min", () => {
  const calls = [];
  render(<QuantityStepper value={1} min={1} onChange={(v) => calls.push(v)} />);
  fireEvent.click(screen.getByLabelText("Increase quantity"));
  fireEvent.click(screen.getByLabelText("Decrease quantity"));
  expect(calls[0]).toBe(2);
  expect(calls[1]).toBe(1);
});
