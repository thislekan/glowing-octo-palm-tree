import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("This is the new home page");

    expect(heading).toBeInTheDocument();
  });

  it("performs integration testing for all components in Home", async () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Enter your number here");
    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();
    await userEvent.type(input, "40");
    waitFor(() => expect(input).toHaveValue("40"));

    const display = screen.getByText("XL");
    expect(display).toBeInTheDocument();
    expect(display).toBeVisible();
  });
});
