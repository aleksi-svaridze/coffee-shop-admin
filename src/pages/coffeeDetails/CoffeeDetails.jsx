import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CoffeeDetails from "../../components/../pages/coffeeDetails";
import Header from "../../components/header/Header";
import styles from "./CoffeeDetails.module.css";

const coffeeData = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    caffeine: "120mg",
    price: "$4.99",
    image: "https://example.com/coffee.jpg",
    description:
      "A light roasted coffee with bright acidity, and complex fruit and floral notes.",
    ingredients: [
      { name: "Arabica Beans", strength: "Medium", flavor: "Fruity" },
      { name: "Robusta Beans", strength: "High", flavor: "Earthy" },
    ],
  },
];

const CoffeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const coffee = coffeeData.find((c) => c.id === Number(id));

  if (!coffee) {
    return <p>Coffee not found ☕</p>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Back to Dashboard
      </button>

      <div className={styles.details}>
        <img src={coffee.image} alt={coffee.name} className={styles.image} />
        <div className={styles.text}>
          <h1>{coffee.name}</h1>
          <div className={styles.info}>
            <span>Origin: {coffee.origin}</span>
            <span>Caffeine: {coffee.caffeine}</span>
            <span>Price: {coffee.price}</span>
          </div>
          <p>{coffee.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {coffee.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} — Strength: {ing.strength}, Flavor: {ing.flavor}
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            <button>Edit Coffee</button>
            <button className={styles.delete}>Delete Coffee</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
