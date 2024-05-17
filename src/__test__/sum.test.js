import { describe, expect, it, test } from "vitest";
import { sum } from "../sum";

describe("group", () => {
  it("Should calculate teh sum of two numbers", () => {
    expect(sum(2, 4)).toBe(6);
  });
});
