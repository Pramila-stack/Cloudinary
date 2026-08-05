import "@testing-library/jest-dom";

if (!global.IntersectionObserver) {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// jsdom does not implement window.scrollTo; stub it so ScrollToTop is a no-op in tests.
window.scrollTo = () => {};
