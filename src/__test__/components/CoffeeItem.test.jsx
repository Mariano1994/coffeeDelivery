import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { data } from "./coffeeItem";
import "@testing-library/jest-dom/vitest";

import CoffeeItem from "../../components/CoffeeItem";
import { CoffeeCartConextProvider } from "../../contexts/CoffeeCartConext";

describe("CoffeeItems", () => {
  it("Should render CooffeItems with the props Data", () => {
    render(
      <CoffeeCartConextProvider>
        <CoffeeItem coffeeData={data} />
      </CoffeeCartConextProvider>
    );

    expect(screen.getByText(/Expresso tradicional/i)).toBeInTheDocument();
  });

  it("Should render a image element in cartItem Component", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
