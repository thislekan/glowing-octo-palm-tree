import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputComponent } from "@/components/input/input";

interface SetupParams {
  numbers?: string;
}
const setup = ({ numbers }: SetupParams) => {
  const mockFn = jest.fn();
  render(<InputComponent setNumbers={mockFn} numbers={numbers || ""} />);
  const input = screen.getByPlaceholderText("Enter your number here");

  return { input, mockFn };
};

test("Render Input Component", () => {
  const { input } = setup({});
  expect(input).toBeVisible();
  expect(input).toHaveDisplayValue("");
});

test("Typing activity on Input Component", async () => {
  const { input, mockFn } = setup({});
  await userEvent.type(input, "15");
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
  waitFor(() => expect(input).toHaveValue("15"));
});

test("Typing letters on Input Component", async () => {
  const { input, mockFn } = setup({ numbers: "" });
  await userEvent.type(input, "returned");
  expect(mockFn).not.toHaveBeenCalled();
  waitFor(() => expect(input).toHaveValue(""));
});
