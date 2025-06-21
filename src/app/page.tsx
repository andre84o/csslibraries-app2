import RandomUserComponent from "@/components/RandomUser";
import styles from './page.module.scss'

export default function UserPage() {
  return (
    <>
    <div className={styles.centerContainer}>
    <button className={styles.buttonStyle}>
      <a className={styles.link} href="https://csslibraries-app1.vercel.app/" target="_blank" rel="noopener noreferrer">
      Todo App
      </a>
      </button>
      </div>

      <RandomUserComponent />
    </>
  );
}
