import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeaderGroup from "@/components/header/headergroup";

describe("Header component", () => {
  it("Does header render?", () => {
    render(<HeaderGroup />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("Does header contain 3 buttons?", () => {
    render(<HeaderGroup />);

    const headerButtons = screen.getAllByTestId("headerButton");
    expect(headerButtons.length == 3);
  });
});
