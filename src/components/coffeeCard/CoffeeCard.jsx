import Btn from "../buttons/Btn";
import styles from "./CoffeeCard.module.css";

function CoffeeCard({ coffee, deleteCoffee }) {
  return (
    <div className={styles.card}>
      <img src={coffee.imageUrl} alt="coffee" />
      <h3>{coffee.coffeeName}</h3>
      <p>{coffee.description}</p>
      <p>
        <strong>Origin:</strong>
        {coffee.countryOfOrigin}
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
          path={`/coffee/${coffee._id}`}
        />
        <div>
          <Btn
            bgColor="#7D5A50"
            label="Edit"
            path={`/update-coffee/${coffee._id}`}
            id={coffee._id}
          />
          <Btn
            bgColor="#e74c3c"
            label="Delete"
            action={deleteCoffee}
            id={coffee._id}
          />
        </div>
      </footer>
    </div>
  );
}

export default CoffeeCard;
