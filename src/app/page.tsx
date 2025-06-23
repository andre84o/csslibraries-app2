import RandomUserComponent from "@/components/RandomUser";
import styles from './page.module.scss';

export default function UserPage() {
  return (
    <>
      <h1 className={styles.header}>Find your new employee</h1>
      <div className={styles.centerContainer}>
        <button className={styles.buttonStyle}>
          <a className={styles.link} href="https://csslibraries-app1.vercel.app/" target="_blank" rel="noopener noreferrer">
            Go to: Todo App
          </a>
        </button>
      </div>
      <div className={styles.pageWrapper}>
      <RandomUserComponent />
    </div>
    </>
  );
}
