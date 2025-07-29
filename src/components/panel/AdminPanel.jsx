import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPanel.module.css";
import { FaUsers, FaTasks, FaChartBar } from "react-icons/fa";
import Dashboard from "../../pages/Dashboard";
import QueryList from "../../features/query/QueryList";
const AdminPanel = () => {
  const [contactQuery, setContactQuery] = useState("");
  const [allQueries, setAllQueries] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "query":
        return <QueryList />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const handleContactChange = (e) => {
    setContactQuery(e.target.value);
  };

  const storeQuery = () => {
    if (contactQuery.trim() !== "") {
      setAllQueries([...allQueries, contactQuery]);
      setContactQuery("");
    }
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className={styles.adminPanel}>
      <aside className={styles.sidebar}>
        <h2>Admin</h2>
        <ul>
          <li>
            <Link to="#" className={styles.navLink} onClick={()=>{setActivePage('dashboard')}}>Dashboard</Link>
          </li>
          <li>
            <Link to="#" className={styles.navLink} onClick={()=>{setActivePage('query')}}>Query</Link>
          </li>
          <li>
            <Link to="/settings" className={styles.navLink}>Settings</Link>
          </li>
        </ul>
      </aside>

      <main className={styles.dashboard}>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPanel;
