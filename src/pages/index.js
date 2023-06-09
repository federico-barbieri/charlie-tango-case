import Head from "next/head";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import FirstForm from "@/components/FirstForm";
import { Header } from "@/components/Header/Header";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <FirstForm className={styles.form} />
    </>
  );
}

/**
 * See this class for the general box styling
 * <div className={styles.content}>
 * 
 * 
 * Intent of colors
--blue - The primary/default color. This has been set as the default text color.
--hover - The hover color for links and buttons.
--aqua - The secondary color. This can be used for alternative buttons, or other decorative elements.
--dusty-blue* - The dusty colors are subtle variations of blue and aqua color. These can be used background colors, input fields, borders, etc.
--yellow - An accent color. This can be used for decorative elements, or other elements that need to stand out.
Make sure to keep your color combinations contrast accessible.
 * 
 */
