import { render } from "@testing-library/react";
import Bow from "./Bow.jsx";
import Lily from "./Lily.jsx";
import LaceEdge from "./LaceEdge.jsx";
import HeartBullet from "./HeartBullet.jsx";

test("bow renders an aria-hidden svg with sage variant", () => {
  const { container } = render(<Bow color="sage" />);
  const svg = container.querySelector("svg");
  expect(svg).toBeInTheDocument();
  expect(svg).toHaveAttribute("aria-hidden", "true");
});
test("lily and heart render aria-hidden svgs", () => {
  const { container: a } = render(<Lily />);
  const { container: b } = render(<HeartBullet />);
  expect(a.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  expect(b.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
});
test("lace edge renders a decorative div", () => {
  const { container } = render(<LaceEdge side="bottom" />);
  expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
});
