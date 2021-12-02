import Image from "next/image";
import styles from "./Navigation.module.scss";
import jeremy from "images/image-jeremy.png";

const Navigation: React.FC = () => {
  return (
    <nav className={styles["nav"]}>
      <section className={styles["user-card"]}>
        <div className={styles["user-card__image-container"]}>
          <Image src={jeremy} />
        </div>
        <div className={styles["user-card__info"]}>
          <span>Report for</span>
          <span className={styles["user-card__focused-text"]}>
            Jeremy Robson
          </span>
        </div>
      </section>
      <section className={styles["tabs"]}>
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </section>
    </nav>
  );
};

export default Navigation;
