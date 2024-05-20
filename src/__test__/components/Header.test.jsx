import * as React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "../../components/Header";
import { CoffeeCartConextProvider } from "../../contexts/CoffeeCartConext";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("Should render location info in Header Component", () => {
    render(
      <CoffeeCartConextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CoffeeCartConextProvider>
    );

    const location = screen.getByText(/Zona/);
    expect(location).toBeInTheDocument();
  });

  it("Should render the logo in Header component ", () => {
    const logo = screen.getByRole("img", { name: /logo/ });

    expect(logo).toBeInTheDocument();
  });
});
