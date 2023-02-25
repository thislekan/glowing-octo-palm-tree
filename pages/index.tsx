import Head from "next/head";
import { useState } from "react";
import { OutputComponent } from "@/components/output/output";
import { InputComponent } from "@/components/input/input";

// import styles from "@/pages/index.module.css";

export default function Home() {
  const [numbers, setNumbers] = useState("");

  return (
    <div className="home">
      <Head>
        <title>Roman Numerals App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home__wrapper">
        <div className="home__wrapper__content">
          <h1>This is the new home page</h1>
          <OutputComponent numbers={numbers} />
          <InputComponent numbers={numbers} setNumbers={setNumbers} />
        </div>
      </div>
    </div>
  );
}
