/* eslint-disable react/prop-types */
import styles from "./EmptyMessage.module.css";

const EmptyMessage = () => {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.noPostMsg}`}>No Posts to show.</p>
    </div>
  );
};

export default EmptyMessage;
