import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.waveText}>
        <span>i</span>
        <span>M</span>
        <span>o</span>
        <span>v</span>
        <span>e</span>
      </h1>
    </div>
  );
};

export default Logo;
