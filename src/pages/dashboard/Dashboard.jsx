import { useState } from "react";
import Header from "../../components/header/Header";
import styles from "./Dashboard.module.css";
import Table from "../../components/table/Table";
import CoffeeCard from "../../components/coffeeCard/CoffeeCard";

function Dashboard() {
  const [data] = useState([
    {
      id: "cof_sample1",
      name: "Ethiopian Yirgacheffe",
      origin: "Ethiopia",
      caffeine: "120mg",
      price: "$4.99",
      description:
        "A light roasted coffee with bright acidity, and complex fruit and floral notes.",
    },
    {
      id: "cof_sample2",
      name: "Colombian Supremo",
      origin: "Colombia",
      caffeine: "130mg",
      price: "$5.49",
      description:
        "A light roasted coffee with bright acidity, and complex fruit and floral notes.",
    },
    {
      id: "cof_sample3",
      name: "Kenyan AA",
      origin: "Kenya",
      caffeine: "125mg",
      price: "$5.99",
      description:
        "A light roasted coffee with bright acidity, and complex fruit and floral notes.",
    },
  ]);

  const deleteCoffee = (id) => {
    console.log("Delete coffee with ID:", id);
  };

  const editCoffee = (id) => {
    console.log("Edit coffee with ID:", id);
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
        data={data}
        deleteCoffee={deleteCoffee}
        editCoffee={editCoffee}
      />

      {/* Coffee Cards */}
      <h2>Coffee-Cards</h2>
      <section className={styles.cards}>
        {data.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
