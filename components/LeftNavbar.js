import React from "react";
import styles from "../styles/LeftNavbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faTable,
  faTachometerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>ORES</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <Link href="/">
              <a>OverView</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUsers}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <Link href="/members">
              <a>Members</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faTable}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <Link href="/data">
              <a>Data</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <Link href="/">
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
