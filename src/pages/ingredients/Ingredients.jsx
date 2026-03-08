import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import AddNewIngredientForm from "../../components/forms/addNewIngredientForm/AddNewIngredientForm";
import IngredientsTable from "../../components/table/IngredientsTable";
import { useLocation, useParams } from "react-router-dom";
import UpdateIngredientsForm from "../../components/forms/updateCoffeeDataForm/UpdateIngredientsForm";

function Ingredients() {
  const [ingredientData, setIngredientData] = useState([]);
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/ingredientData`)
      .then((res) => res.json())
      .then((data) => {
        setIngredientData(data);
      });
  }, []);

  const deleteIngredient = (id) => {
    fetch(`http://localhost:3000/ingredientData/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setIngredientData(
          ingredientData.filter((ingredient) => ingredient.id !== id),
        );
        console.log("Ingredient deleted successfully");
      } else {
        console.error("Failed to delete ingredient");
      }
    });
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

      <IngredientsTable
        value_1={"ID"}
        value_2={"Name"}
        value_3={"Price"}
        value_4={"Strength"}
        value_5={"Flavor"}
        data={ingredientData}
        deleteIngredient={deleteIngredient}
        editIngredient={editIngredient}
      />

      {location.pathname === `/update-ingredients/${params.id}` ? (
        <UpdateIngredientsForm />
      ) : (
        <AddNewIngredientForm />
      )}
    </main>
  );
}

export default Ingredients;
