import { render, screen } from "@testing-library/react";
import AdornedImage from "./AdornedImage.jsx";

test("renders the image with its alt text", () => {
  render(<AdornedImage src="/x.jpg" alt="Aria ribbon midi dress" />);
  expect(screen.getByAltText("Aria ribbon midi dress")).toBeInTheDocument();
});
test("includes lace, lily and bow decorations by default", () => {
  const { container } = render(<AdornedImage src="/x.jpg" alt="dress" />);
  expect(container.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThanOrEqual(3);
});
test("omits the lily when lily={false}", () => {
  const { container, rerender } = render(<AdornedImage src="/x.jpg" alt="dress" lily />);
  const withLily = container.querySelectorAll("svg").length;
  rerender(<AdornedImage src="/x.jpg" alt="dress" lily={false} />);
  expect(container.querySelectorAll("svg").length).toBeLessThan(withLily);
});
