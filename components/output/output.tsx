import { OutputComponentProps } from "./interface";
import { useEffect, useState } from "react";
import { numeralsMap } from "@/utils/constants";
import { OnlyKeys } from "@/utils/interface";
import style from "@/styles/output.module.scss";

export const OutputComponent = ({ numbers }: OutputComponentProps) => {
  const [romanNumerals, setRomanNumerals] = useState("");

  useEffect(() => {
    if (numbers === "" && romanNumerals) return setRomanNumerals("");
    let num: number = Number(numbers);
    if (!num) return;

    let result: string = "";
    let key: OnlyKeys;

    for (key in numeralsMap) {
      // this compares the numbers to the values in the map to determine how many times each key in the map should be repeated for a value.
      const repeatCounter: number = Math.floor(num / numeralsMap[key]);

      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }

      num %= numeralsMap[key]; // num is divided by numeralsMap[key] and the remainder is assigned to num.

      if (num === 0) break;
    }

    setRomanNumerals(result);
  }, [numbers, romanNumerals]);

  return (
    <div className={style.output}>
      <div className={style.output__wrapper}>
        <div className={style.output__wrapper__panel}>
          <p className={style.outputPanel}>{romanNumerals}</p>
        </div>
      </div>
    </div>
  );
};
