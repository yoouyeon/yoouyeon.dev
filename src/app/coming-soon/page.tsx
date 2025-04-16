import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>yoouyeon.dev</header>
      <main className={styles.main}>
        <Image
          alt="헤드폰을 쓰고 가방을 멘 채 급하게 걷는 소녀의 흑백 일러스트"
          src="/late-for-class.png"
          width={280}
          height={280}
        />
        <h1 className={styles.title}>Work In Progress</h1>
        <p className={styles.description}>준비하는 중이에요. 곧 만나요!</p>
      </main>
      <footer className={styles.footer}>
        <Link className={styles.link} href="https://github.com/yoouyeon">
          {/* Github 로고 */}
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
            className="lucide lucide-github-icon lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          Github
        </Link>
        <Link
          className={styles.link}
          href="https://notes.yoouyeon.dev/Thoughts/blog-project-planning"
        >
          {/* Notebook 아이콘 */}
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
            className="lucide lucide-notebook-text-icon lucide-notebook-text"
          >
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <path d="M9.5 8h5" />
            <path d="M9.5 12H16" />
            <path d="M9.5 16H14" />
          </svg>
          블로그 개발 노트
        </Link>
      </footer>
    </>
  );
}
