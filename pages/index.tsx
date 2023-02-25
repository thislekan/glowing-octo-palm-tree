import Head from "next/head";

// import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Roman Numerals App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home__wrapper">
        <div className="home__wrapper__content">
          <h1>This is the new home page</h1>
        </div>
      </div>
    </div>
  );
}
