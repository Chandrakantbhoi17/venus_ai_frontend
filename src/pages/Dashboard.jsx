import React from "react";
import { FaUsers, FaTasks, FaChartBar } from "react-icons/fa";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <h1>Welcome to Admin Panel</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaUsers className={styles.icon} />
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className={styles.card}>
          <FaTasks className={styles.icon} />
          <h3>Tasks</h3>
          <p>98</p>
        </div>
        <div className={styles.card}>
          <FaChartBar className={styles.icon} />
          <h3>Reports</h3>
          <p>45</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
