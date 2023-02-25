import { render, screen } from "@testing-library/react";
import { OutputComponent } from "@/components/output/output";

test("Render OutputComponent", () => {
  render(<OutputComponent />);
  expect(screen.getByText("This is the output component")).toBeVisible();
});
