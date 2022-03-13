import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import { ThemeProvider } from "@/components/ThemeContext";
import FunctionContextComponent from "@/components/FunctionContextComponent";

const Home: NextPage = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Demos</title>
        <meta
          name="description"
          content="Next.js functionalities and CSS Demos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={styles.grid}>
        <div className={styles.modal}>
          <h1>Modal</h1>
          <button className="button-default" onClick={toggle}>
            Show Modal
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
        <div className={styles.themecontext}>
          <ThemeProvider>
            <FunctionContextComponent />
          </ThemeProvider>
        </div>
      </article>
    </div>
  );
};

export default Home;
