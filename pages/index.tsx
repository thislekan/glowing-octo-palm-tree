import Head from "next/head";
import { useState } from "react";
import { OutputComponent } from "@/components/output/output";
import { InputComponent } from "@/components/input/input";
import styles from "@/styles/index.module.scss";

export default function Home() {
  const [numbers, setNumbers] = useState("");

  return (
    <div className={styles.home}>
      <Head>
        <title>Number to Roman Numerals Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home__wrapper}>
        <div className={styles.home__wrapper__content}>
          <h1>Convert numbers to roman numerals</h1>
          <OutputComponent numbers={numbers} />
          <InputComponent numbers={numbers} setNumbers={setNumbers} />
        </div>
      </div>
    </div>
  );
}
