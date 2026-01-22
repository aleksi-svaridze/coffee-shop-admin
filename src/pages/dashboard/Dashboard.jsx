import Header from "../../components/header/Header";

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

      {/* Coffee Cards  */}
    </main>
  );
}

export default Dashboard;
