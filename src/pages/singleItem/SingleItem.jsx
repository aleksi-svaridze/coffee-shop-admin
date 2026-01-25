import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./SingleItem.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Btn from "../../components/buttons/Btn";

export default function SingleItem() {
  const [coffeeDetail, setCoffeeDetail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/coffeeData/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffeeDetail(data));
  }, [id]);

  const deleteCoffee = (id) => {
    fetch(`http://localhost:3000/coffeeData/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        navigate("/");
        console.log("Coffee deleted successfully");
      } else {
        console.error("Failed to delete coffee");
      }
    });
  };

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
              {coffeeDetail.ingredients?.map((ing) => (
                <li key={ing.id}>
                  {ing.name}
                  <span>
                    Strength: {ing.strength}, Flavor: {ing.flavor}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.buttons}>
              <Btn
                bgColor={"#7d5a50"}
                label={"Edit coffee"}
                path={`/update-coffee/${coffeeDetail.id}`}
                id={coffeeDetail.id}
              />
              <Btn
                bgColor={"#e74c3c"}
                label={"Delete cofee"}
                path={"#"}
                id={coffeeDetail.id}
                action={deleteCoffee}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
