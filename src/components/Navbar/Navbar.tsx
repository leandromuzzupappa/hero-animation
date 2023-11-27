import styles from "./Navbar.module.css";

const categories = [
  { name: "Todo", link: "#todo"},
  { name: "Deportes", link: "#deportes" },
  { name: "Entretenimiento", link: "#entretenimiento"},
  { name: "Arte", link: "#arte"},
  { name: "Geografia", link: "#geografia"},
]

interface INavbarProps{
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export const Navbar = ({onClick}: INavbarProps) => {


  return (
    <nav className={styles.navbar}>
      <ul>
        {categories.map((category) => {
          return (
            <li className={styles.navLink} key={category.name}>
              <a href={category.link} onClick={
                (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e)
              }>
                {category.name}
              </a>
            </li>
          )
        })}
        <li className={styles.navLink}>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
