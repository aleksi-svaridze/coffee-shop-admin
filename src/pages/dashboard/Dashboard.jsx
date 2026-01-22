import CoffeeCard from "../../components/coffeeCard/CoffeeCard";
import Header from "../../components/header/Header";
import Styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <main className="main">
      {/* Header */}
      <Header
        btnLabel={"Add new coffee"}
        headerTitle={"Coffee Dashboard"}
        btnBgColor="#7D5A50"
        path={"/add-coffee"}
      />

      {/* Table */}
      <div>Tables here</div>

      {/* Coffee Cards  */}
      <div>
        <CoffeeCard />
      </div>
    </main>
  );
}

export default Dashboard;
