import { useState } from "react";
import Header from "../../components/header/Header";
import Table from "../../components/table/Table";

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
    <main className="main">
      {/* Header */}
      <Header
        btnLabel={"Add new coffee"}
        headerTitle={"Coffee Dashboard"}
        btnBgColor="#7D5A50"
        path={"/add-coffee"}
      />

      {/* Table */}
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
    </main>
  );
}

export default Dashboard;
