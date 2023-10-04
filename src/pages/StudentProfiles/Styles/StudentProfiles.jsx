import React from "react";
import Menu from "../../../common/Menu";
import Overview from "../Components/Overview";
import Styles from "./StudentProfiles.module.css";
// ####### COMMON COMPONENTS IMPORTS #######
import StudentTeacherNavBar from "../../../common/StudentTeacherNavBar";
import Footer from "../../../common/Footer";

export default function StudentProfiles() {
  return (
    <div className={Styles.pageContainer}>
      <StudentTeacherNavBar />
      <div className={Styles.MenuAndOverviewContainer}>
        <Menu />
        <Overview />
      </div>
      <Footer />
    </div>
  );
}
