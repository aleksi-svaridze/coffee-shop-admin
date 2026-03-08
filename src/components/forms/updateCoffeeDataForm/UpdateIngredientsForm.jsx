import { useEffect, useState } from "react";
import Styles from "./UpdateCoffeeDataForm.module.css";
import Btn from "../../buttons/Btn";
import { useNavigate, useParams } from "react-router-dom";

function UpdateIngredientsForm() {
  const [ingredientName, setIngredientName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [strength, setStrength] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/ingredientData/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        (setPrice(data.price),
          setDescription(data.description),
          setIngredientName(data.ingredientName),
          setFlavor(data.flavor),
          setStrength(data.strength));
      });
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "ingredientName":
        setIngredientName(value);
        break;
      case "flavor":
        setFlavor(value);
        break;
      case "strength":
        setStrength(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(Number(value));
        break;
    }
  };

  const handleUpdateIngredientData = (e) => {
    e.preventDefault();

    setIngredientName(ingredientName);
    setFlavor(flavor);
    setStrength(strength);
    setDescription(description);
    setPrice(price);

    fetch(`http://localhost:3000/ingredientData/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flavor,
        strength,
        description,
        ingredientName,
        price,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        console.log("Data has been UPDATED");
      });

    navigate("/");
  };

  return (
    <form className={Styles.form}>
      <h1>Update Ingredient</h1>
      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="ingredientName">Ingredient Name</label>
          <input
            type="text"
            id="ingredientName"
            name="ingredientName"
            required
            className={Styles.input}
            value={ingredientName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={Styles.input__group}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className={Styles.input}
            value={price}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div className={Styles.input__group}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className={Styles.textarea}
          value={description}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
      </div>

      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="strength">Strength</label>

          <select
            id="strength"
            name="strength"
            className={Styles.input}
            onChange={(e) => handleInputChange(e)}
          >
            <option value={strength}>{strength}</option>
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
            value={flavor}
            className={Styles.input}
          />
        </div>
      </div>

      <Btn
        bgColor={"#7D5A50"}
        label={"Update Ingredient"}
        path={"#"}
        action={handleUpdateIngredientData}
      />
    </form>
  );
}

export default UpdateIngredientsForm;
