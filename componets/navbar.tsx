import React from "react";
import styles from "../styles/navbar.module.css"


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="#about">About Us</a>
      <a href="#calendar">Calendar</a>
      <a href="#scheduler">Schedule Appointment</a>
    </nav>
  );
};
