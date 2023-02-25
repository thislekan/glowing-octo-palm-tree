import { render, screen } from "@testing-library/react";
import { InputComponent } from "@/components/input/input";

test("Render Input Component", () => {
  render(<InputComponent />);
  expect(screen.getByPlaceholderText("Enter your number here")).toBeVisible();
});
