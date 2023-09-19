import React from 'react';
import Menu from './Components/Menu';
import Overview from './Components/Overview';
import Styles from './ProgressTracker.module.css';
import StudentTeacherNavBar from '../../common/StudentTeacherNavBar';
import Footer from "../../common/Footer";

export default function ProgressTracker() {
  return (
    <div className={Styles.pageContainer}>
        <StudentTeacherNavBar />
        <div className={Styles.MenuAndOverviewContainer}>
          <Menu />
          <Overview />
        </div>
        <Footer />
    </div>
  )
}
