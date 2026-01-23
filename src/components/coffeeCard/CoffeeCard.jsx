import Btn from "../buttons/Btn";
import styles from "./CoffeeCard.module.css";

function CoffeeCard({ coffee }) {
  return (
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        alt="coffee"
      />
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>
        <strong>Origin:</strong>
        {coffee.origin}
      </p>
      <p>
        <strong>Caffeine:</strong>
        {coffee.caffeine}
      </p>
      <p>
        <strong>Price:</strong>
        {coffee.price}
      </p>

      <footer className={styles.card_footer}>
        <Btn
          bgColor="#B4846C"
          label="View More"
          path={`/coffee/${coffee.id}`}
        />
        <div>
          <Btn bgColor="#7D5A50" label="Edit" />
          <Btn bgColor="#e74c3c" label="Delete" />
        </div>
      </footer>
    </div>
  );
}

export default CoffeeCard;
