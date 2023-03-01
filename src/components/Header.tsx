import styles from "./Header.module.css";
import TodoLogo from "/images/rocket.svg";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={TodoLogo} alt='' />
        <h1 className={`${styles.logo_text} ${styles.gradient_logo}`}>todo</h1>
      </div>
    </header>
  );
};
