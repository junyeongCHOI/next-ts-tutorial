import type { ReactNode } from "react";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.menu_wrap}>
          <div className={styles.logo}>
            <img src="images/logo.png" alt="logo" />
            Color Hunt
          </div>
          <i className="xi-ellipsis-h" />
        </div>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
