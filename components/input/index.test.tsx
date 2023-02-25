import { render, screen } from "@testing-library/react";
import { InputComponent } from "@/components/input/input";

test("Render Input Component", () => {
  render(<InputComponent />);
  expect(screen.getByText("This is the input component")).toBeVisible();
});
