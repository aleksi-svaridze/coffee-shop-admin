import { useState } from "react";
import Header from "../../components/header/Header";
<<<<<<< HEAD
import styles from "./Dashboard.module.css";
=======
import Table from "../../components/table/Table";
>>>>>>> d6faa73608e65780296b68458b90c411bffa28b0

function Dashboard() {
  const [data] = useState([
    {
      id: "cof_sample1",
      name: "Ethiopian Yirgacheffe",
      origin: "Ethiopia",
      caffeine: "120mg",
      price: "$4.99",
    },
    {
      id: "cof_sample2",
      name: "Colombian Supremo",
      origin: "Colombia",
      caffeine: "130mg",
      price: "$5.49",
    },
    {
      id: "cof_sample3",
      name: "Kenyan AA",
      origin: "Kenya",
      caffeine: "125mg",
      price: "$5.99",
    },
    {
      id: "cof_sample4",
      name: "Kenyan BB",
      origin: "Kenya",
      caffeine: "725mg",
      price: "$9.99",
    },
    {
      id: "cof_sample5",
      name: "Africa BB",
      origin: "Africa",
      caffeine: "725mg",
      price: "$9.99",
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

      {/* Table */}
<<<<<<< HEAD
      <section className={styles.tableSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Caffeine</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Ethiopian Yirgacheffe</td>
              <td>Ethiopia</td>
              <td>120mg</td>
              <td>$4.99</td>
              <td className={styles.actions}>
                <button className={styles.view}>View</button>
                <button className={styles.edit}>Edit</button>
                <button className={styles.delete}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <h2>Coffee-Cards</h2>

      {/* Coffee Cards */}
      <section className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="coffee"
          />
          <h3>Ethiopian Yirgacheffe</h3>
          <p>
            A light roasted coffee with bright acidity, and complex fruit and
            floral notes....
          </p>
          <p>
            <strong>Origin:</strong>
            "Ethiopia"
          </p>
          <p>
            <strong>Caffeine:</strong>
            "120mg"
          </p>
          <p>
            <strong>Price:</strong>
            "$4.99"
          </p>
          <div className={styles.card_footer}>
            <button className={styles.view}>View More</button>
            <button className={styles.edit}>Edit</button>
            <button className={styles.delete}>Delete</button>
          </div>
        </div>
      </section>
=======
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
      {/* Coffee Cards  */}
>>>>>>> d6faa73608e65780296b68458b90c411bffa28b0
    </main>
  );
}

export default Dashboard;
