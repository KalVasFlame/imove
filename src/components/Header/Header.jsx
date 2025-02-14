import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Logo from "../UI/Logo/Logo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>

      <Navbar />
    </div>
  );
};

export default Header;
