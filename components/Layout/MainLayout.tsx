import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.menu_wrap}></div>
      </div>
      <div className={styles.container}>test</div>
    </div>
  );
};

export default MainLayout;
