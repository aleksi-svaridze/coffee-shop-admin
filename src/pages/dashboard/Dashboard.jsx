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
              <th>Title</th>
              <th>Country</th>
              <th>Caffeine</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* MOCK DATA – შემდეგ Context-ით ჩავანაცვლებთ */}
            <tr>
              <td>1</td>
              <td>Espresso</td>
              <td>Italy</td>
              <td>High</td>
              <td>6 ₾</td>
              <td className={styles.actions}>
                <button className={styles.edit}>Edit</button>
                <button className={styles.delete}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Coffee Cards */}
      <section className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="coffee"
          />
          <h3>Espresso</h3>
          <p>Strong and classic Italian coffee</p>
          <span>6 ₾</span>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
