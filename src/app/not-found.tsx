import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.description}>
        이 페이지는 존재하지 않거나 아직 준비되지 않았어요.
      </p>
      <Link className={styles.link} style={{ marginTop: "2rem" }} href="/">
        {/* undo 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-undo-icon lucide-undo"
        >
          <path d="M3 7v6h6" />
          <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
        </svg>
        메인 페이지로 돌아가기
      </Link>
    </main>
  );
}
