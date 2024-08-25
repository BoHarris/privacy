import styles from "../styles/Navbar.module.css";
import Link from "next/link";

import { useRouter } from "next/router";
import Login from "./Login";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.sitetitle} ${
          pathname === "/" ? styles.active : ""
        }`}
      >
        Privacy Explained
      </Link>
      <ul>
        <li>
          <Login />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
