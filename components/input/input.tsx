import { BaseSyntheticEvent } from "react";
import { InputComponentProps } from "./interface";

export const InputComponent = ({
  numbers,
  setNumbers,
}: InputComponentProps) => {
  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setNumbers(value);
  };
  return (
    <div className="input-component">
      <input
        type="text"
        name="number"
        id=""
        value={numbers}
        placeholder="Enter your number here"
        onChange={handleChange}
      />
    </div>
  );
};
