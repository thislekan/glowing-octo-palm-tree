import { BaseSyntheticEvent, useState } from "react";
import { InputComponentProps } from "./interface";
import style from "@/styles/input.module.scss";

export const InputComponent = ({
  numbers,
  setNumbers,
}: InputComponentProps) => {
  const [warning, setWarning] = useState("");

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    if (value && !/^\d+$/.test(value)) return; // checks if inputs are numbers
    if (value.length === 1 && Number(value) === 0)
      return setWarning("0 is not represented in Roman numerals");
    if (value.length > 4) return setWarning("Only 4 digit numbers are allowed");

    setNumbers(value);
    warning && setWarning("");
  };

  return (
    <div className={style.inputComponent}>
      {warning && <p className={style.inputComponent__warning}>{warning}</p>}
      <input
        type="text"
        name="number"
        id=""
        value={numbers}
        placeholder="Enter your number here"
        onChange={handleChange}
        className={style.inputComponent__inputField}
      />
    </div>
  );
};
