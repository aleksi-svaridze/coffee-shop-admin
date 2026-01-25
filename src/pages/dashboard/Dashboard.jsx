import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./Dashboard.module.css";
import Table from "../../components/table/Table";
import CoffeeCard from "../../components/coffeeCard/CoffeeCard";

function Dashboard() {
  const [coffeesData, setCoffeesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/coffeeData")
      .then((response) => response.json())
      .then((data) => {
        setCoffeesData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteCoffee = (id) => {
    fetch(`http://localhost:3000/coffeeData/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setCoffeesData(coffeesData.filter((coffee) => coffee.id !== id));
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
            key={coffee.id}
            coffee={coffee}
            deleteCoffee={deleteCoffee}
          />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
