import { useState } from "react";
import Header from "../../components/header/Header";
import Table from "../../components/table/Table";

function Ingredients() {
  const [ingredients] = useState([
    {
      id: "ing_sample1",
      name: "Arabica Beans",
      price: 4.0,
      strength: "Medium",
      flavor: "Sweet",
    },
    {
      id: "ing_sample2",
      name: "Robusta Beans",
      price: 3.5,
      strength: "High",
      flavor: "Earthy",
    },
    {
      id: "ing_sample3",
      name: "Vanilla Syrup",
      price: 6.0,
      strength: "Low",
      flavor: "Fruity",
    },
  ]);

  const deleteIngredient = (id) => {
    console.log("Delete ingredient with ID:", id);
    // Implement deletion logic here
  };

  const editIngredient = (id) => {
    console.log("Edit ingredient with ID:", id);
    // Implement edit logic here
  };
  return (
    <main className="main ">
      <Header
        btnLabel={"Back to dashboard"}
        headerTitle={"Manage Ingredients"}
        btnBgColor="#B4846C"
        path={"/"}
      />

      <Table
        value_1={"ID"}
        value_2={"Name"}
        value_3={"Price"}
        value_4={"Strength"}
        value_5={"Flavor"}
        data={ingredients}
        deleteIngredient={deleteIngredient}
        editIngredient={editIngredient}
      />
    </main>
  );
}

export default Ingredients;
