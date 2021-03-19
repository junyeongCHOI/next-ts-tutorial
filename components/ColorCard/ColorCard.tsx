import styles from "./ColorCard.module.scss";
import { Color } from "../../pages/api/colors";

interface ColorCardProps {
  data: Color;
}

const ColorCard = ({ data }: ColorCardProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.palette}></div>
      <div className={styles.utils}>
        <div className={styles.like}>
          <i className="xi-heart" />
          {data.likes}
        </div>
        <div className={styles.date}>{data.date}</div>
      </div>
    </div>
  );
};

export default ColorCard;
