import * as React from "react";
import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Home from "../../pages/Home";
import { CoffeeCartConextProvider } from "../../contexts/CoffeeCartConext";

describe("Home component", () => {
  it("it should render home componet with all the children components", () => {
    render(
      <CoffeeCartConextProvider>
        <Home />
      </CoffeeCartConextProvider>
    );
  });

  it("Should render coffee menu sectiion", () => {
    const menuSectiontitle = screen.getByRole("heading", {
      name: /Nossos cafés/,
    });

    expect(menuSectiontitle).toBeInTheDocument();
  });
});
