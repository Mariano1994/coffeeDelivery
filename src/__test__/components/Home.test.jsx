import * as React from "react";
import { it, describe, expect, beforeAll, beforeEach } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Home from "../../pages/Home";
import { CoffeeCartConextProvider } from "../../contexts/CoffeeCartConext";
import Header from "../../components/Header";
import Cart from "../../pages/Cart";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("it should render home componet with all the children components", () => {
    render(
      <BrowserRouter>
        <CoffeeCartConextProvider>
          <Header />
          <Home />
          <Cart />
        </CoffeeCartConextProvider>
      </BrowserRouter>
    );
  });

  it("Should render location in header component", () => {
    const location = screen.getByText(/Zona/);
    expect(location).toBeInTheDocument();
  });

  it("Should render all coffeeItems", () => {
    const coffeeItems = screen.getAllByRole("listitem");
    expect(coffeeItems.length).toBe(14);
  });

  it("Should render coffee menu section", () => {
    const menuSectiontitle = screen.getByRole("heading", {
      name: /Nossos cafés/,
    });

    expect(menuSectiontitle).toBeInTheDocument();
  });

  it("Should add item on Shopping cart", () => {
    const addButton = screen.getAllByTestId("addButton");
    fireEvent.click(addButton[0]);
    const itemsOnCart = screen.getByTestId("itemsOnCart");
    expect(itemsOnCart).toBeInTheDocument();
    expect(itemsOnCart).toHaveTextContent(1);
  });
});
