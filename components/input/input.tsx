import { BaseSyntheticEvent } from "react";
import { InputComponentProps } from "./interface";
import style from "@/styles/input.module.scss";

export const InputComponent = ({
  numbers,
  setNumbers,
}: InputComponentProps) => {
  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    if (value && !/^\d+$/.test(value)) return;
    setNumbers(value);
  };
  return (
    <div className={style.inputComponent}>
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
