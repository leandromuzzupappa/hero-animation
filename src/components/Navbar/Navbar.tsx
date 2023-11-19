import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.navLink}>
          <a href="#">Todo</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Deportes</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Entretenimiento</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Arte</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Geografia</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
