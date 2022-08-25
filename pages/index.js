import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wryte - A Decentralized Publishing Platform</title>
        <link rel="icon" href={"/round.png"} />
        <meta name="title" content="Wryte - A Decentralized Publishing Platform" />
        <meta name="description" content="Wryte brings the power of web3 to your stories, making you the owner of your content" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wryte.xyz/" />
        <meta property="og:title" content="Wryte - A Decentralized Publishing Platform" />
        <meta property="og:description" content="Wryte brings the power of web3 to your stories, making you the owner of your content" />
        <meta property="og:image" content='https://www.wryte.xyz/seoLogo.png' />
        <meta property="og:image:secure_url" content='https://www.wryte.xyz/seoLogo.png' />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Wryte - A Decentralized Publishing Platform" />
        <meta property="twitter:description" content="Wryte brings the power of web3 to your stories, making you the owner of your content" />
        <meta property="twitter:image" content='https://www.wryte.xyz/seoLogo.png' />
      </Head>
      <div className="logo">
        <img src="/logo.gif" />
      </div>
      <h2>A Decentralized Publishing Platform</h2>
      <p>Launching 18 Sept🚀</p>
      <a href="https://twitter.com/WryteXyz" target="_blank" rel="noreferrer">
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
