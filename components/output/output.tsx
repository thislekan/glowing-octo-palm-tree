import { OutputComponentProps } from "./interface";
import { useEffect, useState } from "react";
import { numeralsMap } from "@/utils/constants";
import { OnlyKeys } from "@/utils/interface";

export const OutputComponent = ({ numbers }: OutputComponentProps) => {
  const [romanNumerals, setRomanNumerals] = useState("");

  useEffect(() => {
    let num: number = Number(numbers);
    if (!num && num !== 0) return;

    let result: string = "";
    let key: OnlyKeys;

    for (key in numeralsMap) {
      const repeatCounter: number = Math.floor(num / numeralsMap[key]);

      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }

      num %= numeralsMap[key];

      if (num === 0) break;
    }

    setRomanNumerals(result);
  }, [numbers]);

  return (
    <div className="output">
      <div className="output__wrapper">
        <div className="output__wrapper__panel">
          <p className="output-panel">{romanNumerals}</p>
        </div>
      </div>
    </div>
  );
};
