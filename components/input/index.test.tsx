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

test("Typing 0 on Input Component", async () => {
  const { input, mockFn } = setup({});
  await userEvent.type(input, "0");
  expect(mockFn).not.toHaveBeenCalled();
  waitFor(() => expect(input).toHaveValue(""));

  const warningMsg = screen.getByText("0 is not represented in Roman numerals");
  expect(warningMsg).toBeInTheDocument();
  expect(warningMsg).toBeVisible();
});

test("Typing more than 4 digits numbers", async () => {
  const { input, mockFn } = setup({});
  await userEvent.type(input, "45678");
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(5);

  waitFor(() => expect(input).toHaveValue("4567"));
  waitFor(() =>
    expect(
      screen.getByText("Only 4 digit numbers are allowed")
    ).toBeInTheDocument()
  );
  waitFor(() =>
    expect(screen.getByText("Only 4 digit numbers are allowed")).toBeVisible()
  );

  await userEvent.type(input, "{Backspace}{Backspace}{Backspace}{Backspace}");
  waitFor(() =>
    expect(
      screen.getByText("Only 4 digit numbers are allowed")
    ).not.toBeInTheDocument()
  );
  waitFor(() =>
    expect(
      screen.getByText("Only 4 digit numbers are allowed")
    ).not.toBeVisible()
  );
});
