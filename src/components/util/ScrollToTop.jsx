import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Single-page apps keep the previous scroll position on navigation. Reset to the
// top whenever the path changes (including product -> related product), so each
// page opens from the top instead of mid-scroll.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
