import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext.jsx";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
const product = { id: 1, slug: "aria", name: "Aria", price: 68, images: ["x"] };

beforeEach(() => localStorage.clear());

describe("cart", () => {
  it("adds an item and computes count + subtotal", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.addItem(product, { color: "Blush", size: "S", qty: 2 }));
    expect(result.current.count).toBe(2);
    expect(result.current.subtotal).toBe(136);
  });
  it("merges same variant instead of duplicating", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.addItem(product, { color: "Blush", size: "S", qty: 1 }));
    act(() => result.current.addItem(product, { color: "Blush", size: "S", qty: 1 }));
    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0].qty).toBe(2);
  });
  it("removes and clears", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.addItem(product, { color: "Blush", size: "S", qty: 1 }));
    const key = result.current.items[0].key;
    act(() => result.current.removeItem(key));
    expect(result.current.items.length).toBe(0);
  });
  it("persists to localStorage", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.addItem(product, { color: "Blush", size: "S", qty: 1 }));
    expect(localStorage.getItem("cloudine-cart")).toContain("aria");
  });
});
