import { pricesData } from "../../data/constants";
import styles from "./Prices.module.scss";

const Prices = () => {
  return (
    <section className={styles.prices} id="prices">
      <p>Прайс-лист</p>
      <div className={styles.items}>
        {pricesData.map((price) => (
          <div className={styles.item} key={price.title}>
            <div className={styles.header}>
              <h5>{price.title}</h5>
              <h5>{price.price}</h5>
            </div>
            <p>{price.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
