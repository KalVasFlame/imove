import { Link, useLocation } from "react-router-dom";

import navList from "./navList";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={styles.navbar}>
      {navList.map((item) => (
        <Link
          className={
            location.pathname === item.path
              ? styles.active
              : styles.link
          }
          to={item.path}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
