import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaGraduationCap,
  FaClipboardList,
  FaBullhorn,
  FaChalkboardTeacher, // Import teacher icon
  FaSignOutAlt, // Import logout icon
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo and Admin Dashboard Title */}
      <div className={styles.logoContainer}>
        <img src="src/assets/cvsu.png" alt="Logo" className={styles.logo} /> {/* Update logo path */}
        <h2 className={styles.dashboardTitle}>Admin Dashboard</h2>
      </div>

      {/* Navigation Links */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaHome className={styles.icon} />
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaChalkboardTeacher className={styles.icon} />
        Teachers
      </NavLink>
      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaGraduationCap className={styles.icon} />
        Students
      </NavLink>
      <NavLink
        to="/masterlist"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaClipboardList className={styles.icon} />
        Masterlist
      </NavLink>
      <NavLink
        to="/announcement"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaBullhorn className={styles.icon} />
        Announcement
      </NavLink>

      {/* Log Out Button */}
      <button className={styles.logoutButton}>
        <FaSignOutAlt className={styles.icon} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
