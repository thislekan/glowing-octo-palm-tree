import { render, screen } from "@testing-library/react";
import { OutputComponent } from "@/components/output/output";

test("Render OutputComponent without props", () => {
  const { container } = render(<OutputComponent numbers="" />);
  const outputPanel = container.getElementsByClassName("output-panel");
  expect(outputPanel.length).toEqual(1);
});

test("Render OutputComponent with Props", () => {
  render(<OutputComponent numbers="19" />);
  expect(screen.getByText("XIX")).toBeVisible();
  expect(screen.getAllByText("XIX").length).toBe(1);
});
