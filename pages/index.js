import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainApp from "./MainApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Email summarizer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <MainApp></MainApp>
      </main>
    </>
  );
}
