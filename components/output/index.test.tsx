import { render, screen } from "@testing-library/react";
import { OutputComponent } from "@/components/output/output";

test("Render OutputComponent", () => {
  const { container } = render(<OutputComponent />);
  const outputPanel = container.getElementsByClassName("output-panel");
  expect(screen.getByText("This is the output component")).toBeVisible();
  expect(outputPanel.length).toEqual(1);
});
