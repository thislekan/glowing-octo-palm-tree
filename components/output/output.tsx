import { OutputComponentProps } from "./interface";

export const OutputComponent = ({ numbers }: OutputComponentProps) => {
  return (
    <div className="output">
      <div className="output__wrapper">
        <div className="output__wrapper__panel">
          <p className="output-panel">{numbers}</p>
        </div>
      </div>
    </div>
  );
};
