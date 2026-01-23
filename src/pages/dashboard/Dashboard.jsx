import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./Dashboard.module.css";
import Table from "../../components/table/Table";
import CoffeeCard from "../../components/coffeeCard/CoffeeCard";

function Dashboard() {
  const [coffeesData, setCoffeesData] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffeesData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteCoffee = (id) => {
    fetch(
      `https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees/${id}`,
      {
        method: "DELETE",
      },
    ).then((response) => {
      if (response.ok) {
        setCoffeesData(coffeesData.filter((coffee) => coffee._id !== id));
        console.log("Coffee deleted successfully");
      } else {
        console.error("Failed to delete coffee");
      }
    });
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <Header
        btnLabel="Add new coffee"
        headerTitle="Coffee Dashboard"
        btnBgColor="#7D5A50"
        path="/add-coffee"
      />

      <Table
        value_1={"ID"}
        value_2={"Name"}
        value_3={"Origin"}
        value_4={"Caffeine"}
        value_5={"Price"}
        data={coffeesData}
        deleteCoffee={deleteCoffee}
      />

      {/* Coffee Cards */}
      <h2>Coffee-Cards</h2>
      <section className={styles.cards}>
        {coffeesData.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            deleteCoffee={deleteCoffee}
          />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
