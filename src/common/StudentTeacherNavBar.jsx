import React from "react";
import Styles from "./StudentTeacherNavBar.module.css";
// ---------------- Logo image import
import LevelUpWorksLogoBlue from "../assets/NavBar/LevelUpWorks-blue.png";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------- Country flag image imports
import NZflag from "../assets/NavBar/NZFlag.png";
import MaoriFlag from "../assets/NavBar/MaoriFlag.png";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function navBar() {
  return (
    <div className={Styles.StudentTeacherNavBarContainer}>
      <div className={Styles.levelUpWorksLogoContainer}>
        <img src={LevelUpWorksLogoBlue} alt="Company Logo" />
      </div>

      <div className={Styles.StudentTeacherNavBarBtnsContainer}>
        <button className={Styles.helpCentreBtn}>Help Centre</button>
        <button className={Styles.moreProjectsBtn}>More Projects</button>
        <div className={Styles.flagsContainer}>
          <img src={NZflag} alt="Country flag" />
          <img src={MaoriFlag} alt="Country flag" />
        </div>
      </div>
    </div>
  );
}