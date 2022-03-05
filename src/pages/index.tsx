import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Profile from "/img/peep.svg";
function HomepageHeader() {
  useEffect(() => {
    const mainWrapper = document.querySelector<HTMLDivElement>(".main-wrapper");
    mainWrapper.style.alignItems = "center";

    return function cleanUp() {
      mainWrapper.style.alignItems = "";
    };
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("flex", styles.heroBanner)}>
      <div className="mt-auto container">
        <h1 className="text-2xl font-bold">안녕하세요! 금교영입니다</h1>
        <p className="text-lg">This is my TIL storage and Blog</p>
        <div className="flex justify-center items-center">
          <Profile></Profile>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            글 보러가기 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
