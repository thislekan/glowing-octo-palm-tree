import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputComponent } from "@/components/input/input";

test("Render Input Component", () => {
  const mockFn = jest.fn();
  render(<InputComponent setNumbers={mockFn} numbers="" />);
  const input = screen.getByPlaceholderText("Enter your number here");
  expect(input).toBeVisible();
  expect(input).toHaveDisplayValue("");
});

test("Typing activity on Input Component", async () => {
  const mockFn = jest.fn();
  render(<InputComponent setNumbers={mockFn} numbers="" />);
  const input = screen.getByPlaceholderText("Enter your number here");
  expect(input).toBeVisible();
  expect(input).toHaveTextContent("");
  await userEvent.type(input, "15");
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
});
