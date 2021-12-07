import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello,<span> Admin</span>
          </h2>
          <p>Admin Dashboard</p>
        </div>
      </div>
      <div className={styles.profile}>
        <FontAwesomeIcon className={styles.faIcon} icon={faUser} />
      </div>
    </div>
  );
}

export default Header;
