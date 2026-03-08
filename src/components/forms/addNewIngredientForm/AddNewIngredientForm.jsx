import Styles from "./AddNewIngredientForm.module.css";
import Btn from "../../buttons/Btn";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddNewIngredientForm() {
  const [ingredientName, setIngredientName] = useState("");
  const [description, setDescription] = useState("");
  const [strength, setStrength] = useState("medium");
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState(0);

  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "ingredientName":
        setIngredientName(value);
        break;
      case "strength":
        setStrength(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "flavor":
        setFlavor(value);
        break;
      case "price":
        setPrice(Number(value));
        break;
    }
  };

  const handleAddNewIngredients = (e) => {
    e.preventDefault();

    setFlavor(flavor);
    setStrength(strength);
    setDescription(description);
    setPrice(price);
    setIngredientName(ingredientName);

    fetch(`http://localhost:3000/ingredientData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredientName,
        description,
        strength,
        flavor,
        price,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      });

    // navigate("/");
  };

  return (
    <form className={Styles.form}>
      <h1>Add New Ingredient</h1>
      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="ingredientName">Ingredient Name</label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="ingredientName"
            name="ingredientName"
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.input__group}>
          <label htmlFor="price">Price ($)</label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="number"
            min={0}
            id="price"
            name="price"
            required
            className={Styles.input}
          />
        </div>
      </div>

      <div className={Styles.input__group}>
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) => handleInputChange(e)}
          id="description"
          name="description"
          className={Styles.textarea}
        ></textarea>
      </div>

      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="strength">Strength</label>

          <select
            id="strength"
            name="strength"
            className={Styles.select}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="strong">Strong</option>
          </select>
        </div>

        <div className={Styles.input__group}>
          <label htmlFor="flavor">Flavor Profile</label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="flavor"
            name="flavor"
            required
            className={Styles.input}
          />
        </div>
      </div>

      <Btn
        bgColor={"#7D5A50"}
        label={"Add Ingredient"}
        path={"#"}
        action={handleAddNewIngredients}
      />
    </form>
  );
}

export default AddNewIngredientForm;
