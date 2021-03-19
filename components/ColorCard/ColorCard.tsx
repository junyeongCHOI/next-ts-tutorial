import styles from "./ColorCard.module.scss";
import moment from "moment";
import { Color } from "../../pages/api/colors";

moment.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
    s: "Today",
    ss: "Today",
    m: "Today",
    mm: "Today",
    h: "Today",
    hh: "Today",
    d: "Yesterday",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

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
        <div className={styles.date}>{moment(data.date).fromNow(true)}</div>
      </div>
    </div>
  );
};

export default ColorCard;
