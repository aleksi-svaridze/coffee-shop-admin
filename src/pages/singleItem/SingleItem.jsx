import { useState } from "react";
import Header from "../../components/header/Header";
import styles from "./SingleItem.module.css";
import { useParams } from "react-router-dom";
import Btn from "../../components/buttons/Btn";

export default function SingleItem() {
  const [coffeeDetail] = useState({
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHwy",
    coffeeName: "Yirgacheffe",
    countryOfOrigin: "Ethiopia",
    caffeine: 230,
    price: 12,
    description:
      "A light roasted coffee with bright acidity, and complex fruit and floral notes.",
    ingredients: [
      { id: 1, name: "Arabica Beans", strength: "Low", flavor: "Fruity" },
      { id: 2, name: "Robusta Beans", strength: "Medium", flavor: " Earthy" },
    ],
  });
  const { id } = useParams();
  console.log(id);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(
  //     `https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees/${id}`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCoffeeDetail(data));
  // }, [id]);

  // const deleteCoffee = (id) => {
  //   fetch(
  //     `https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees/${id}`,
  //     {
  //       method: "DELETE",
  //     },
  //   ).then((response) => {
  //     if (response.ok) {
  //       navigate("/");
  //       console.log("Coffee deleted successfully");
  //     } else {
  //       console.error("Failed to delete coffee");
  //     }
  //   });
  // };

  if (!coffeeDetail) {
    return <p>Coffee not found ☕</p>;
  }

  return (
    <main className="main">
      <Header
        btnBgColor="#B4846C"
        btnLabel={"Back to Dashboard"}
        headerTitle={"Coffee Details"}
        path={"/"}
      />

      <div className={styles.container}>
        <div className={styles.details}>
          <img
            src={coffeeDetail.imageUrl}
            alt={coffeeDetail.coffeeName}
            className={styles.image}
          />
          <div className={styles.text}>
            <h1>{coffeeDetail.coffeeName}</h1>
            <div className={styles.info}>
              <span>Origin: {coffeeDetail.countryOfOrigin}</span>
              <span>Caffeine: {coffeeDetail.caffeine}</span>
              <span>Price: {coffeeDetail.price}</span>
            </div>
            <p>{coffeeDetail.description}</p>
            <h3>Ingredients</h3>
            <ul>
              {coffeeDetail.ingredients.map((ing, i) => (
                <li key={i}>
                  {ing.name} — Strength: {ing.strength}, Flavor: {ing.flavor}
                </li>
              ))}
            </ul>

            <div className={styles.buttons}>
              <Btn
                bgColor={"#7d5a50"}
                label={"Edit"}
                path={`/update-coffee/${coffeeDetail._id}`}
                id={coffeeDetail._id}
              />
              <Btn
                bgColor={"#e74c3c"}
                label={"Delete"}
                path={"#"}
                id={coffeeDetail._id}
                // action={deleteCoffee}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
