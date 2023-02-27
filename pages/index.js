import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header.js";
import FAQs from "./faqs.js";
import Data from "./data.js";
import Celebrate from "./celebrate.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah got a job</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="fonts-google-apis"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          key="fonts-google-static"
        />
        <link
          href="https://fonts.googleapis.com/css2?Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
          key="fonts-google-noto-serif"
        ></link>
      </Head>

      <Header />

      <main>
        <div className={styles.hero}>
          <h1 className={styles.title}>Sarah got a job!</h1>
        </div>
        <Celebrate />
        <FAQs />
        <Data />
      </main>

      <footer>
        <a
          href="https://sarahransohoff.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More from Sarah
        </a>
      </footer>
    </div>
  );
}
