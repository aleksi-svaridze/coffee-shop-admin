import Header from "../../components/header/Header";
import Table from "../../components/table/Table";

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
      <Table />
      {/* Coffee Cards  */}
    </main>
  );
}

export default Dashboard;
