/* import Image from "next/image";
import styles from "./page.module.css"; */

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/admin">Greate quiz</Link>
      <br />
      <Link href="/run-quiz">Play!</Link>
    </>
  );
}
