import { Navigation } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Time Tracking Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles["container"]}>
        <Navigation />
      </main>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jalen Greene</a>.
      </div>
    </>
  );
};

export default Home;
