/** @format */

import { FC } from "react";
import Navigator from "./Navigator";
import Header from "./Head";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.css";

export const Layout: FC<{
  headerChild?: JSX.Element;
  title?: string;
  description?: string;
}> = ({ children, title, description }) => (
  <div>
    <Header title={title} description={description} />
    <div className={styles.header}>
      <Navigator />
    </div>
    <br />
    <main className={styles.headerPadding}>{children}</main>
    <div style={{ textAlign: "center" }}>
      <Footer />
    </div>
  </div>
);
