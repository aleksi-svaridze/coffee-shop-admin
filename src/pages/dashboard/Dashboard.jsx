import Header from "../../components/header/Header";
import styles from "./Dashboard.module.css";

function Dashboard() {
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
    </main>
  );
}

export default Dashboard;
