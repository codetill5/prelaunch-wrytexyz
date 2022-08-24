import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wryte - A Decentralized Publishing Platform</title>
      </Head>
      <div className="logo">
      <img src="/logo.gif"  />
      </div>
      <h2>A Decentralized Publishing Platform</h2>
      <p>Launching 18 Sept🚀</p>
      <a href="https://twitter.com/WryteXyz" target="_blank">
      <div className="followContainer">
        <p>For more Updates - Follow </p>
        <img
          src="/twitter.png"
          style={{
            height: "30px",
            width: "30px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </div>
      </a>
    </div>
  );
}
