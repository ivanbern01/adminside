import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaGraduationCap,
  FaClipboardList,
  FaBullhorn,
  FaChalkboardTeacher,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo and Admin Dashboard Title */}
      <div className={styles.logoContainer}>
        <img src="src/assets/cvsu.png" alt="Logo" className={styles.logo} />
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

      {/* Teachers Section */}
      <div className={styles.navGroup}>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          <FaChalkboardTeacher className={styles.icon} />
          Teachers
        </NavLink>
        {/* Create Teacher Link */}
        <NavLink
          to="/teachers/create"
          className={({ isActive }) =>
            isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
          }
        >
          &nbsp;&nbsp;• Create Teacher
        </NavLink>
        {/* Teacher Schedule Link */}
        <NavLink
          to="/teachers/schedule"
          className={({ isActive }) =>
            isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
          }
        >
          &nbsp;&nbsp;• Teacher Schedule
        </NavLink>
      </div>

      {/* Students Section */}
      <div className={styles.navGroup}>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          <FaGraduationCap className={styles.icon} />
          Students
        </NavLink>
        {/* Create Student Link */}
        <NavLink
          to="/students/create"
          className={({ isActive }) =>
            isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
          }
        >
          &nbsp;&nbsp;• Create Student
        </NavLink>
        {/* Student Admission Link */}
        <NavLink
          to="/students/admission"
          className={({ isActive }) =>
            isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
          }
        >
          &nbsp;&nbsp;• Student Admission
        </NavLink>
        {/* Student Schedule Link */}
        <NavLink
          to="/students/schedule"
          className={({ isActive }) =>
            isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
          }
        >
          &nbsp;&nbsp;• Student Schedule
        </NavLink>
      </div>

      {/* Uploaded Documents */}
      <NavLink
        to="/uploaded-documents"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaClipboardList className={styles.icon} />
        Uploaded Documents
      </NavLink>

      {/* Announcement */}
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
