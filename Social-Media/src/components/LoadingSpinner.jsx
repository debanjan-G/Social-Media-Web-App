import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`spinner-border text-success`}
        style={{ width: "7rem", height: "7rem", margin: "25px" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className={`${styles.loadingText}`}>LOADING</p>
    </div>
  );
};

export default LoadingSpinner;
