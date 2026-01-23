import { useEffect, useState } from "react";
import Styles from "./UpdateCoffeeDataForm.module.css";
import Btn from "../../buttons/Btn";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCoffeeDataForm() {
  const [coffeeName, setCoffeeName] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [caffeine, setCaffeine] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees/${params.id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        (setCaffeine(data.caffeine),
          setImageUrl(data.imageUrl),
          setIngredients(data.ingredients),
          setPrice(data.price),
          setDescription(data.description),
          setCountryOfOrigin(data.countryOfOrigin),
          setCoffeeName(data.coffeeName));
      });
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "coffeeName":
        setCoffeeName(value);
        break;
      case "countryOfOrigin":
        setCountryOfOrigin(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      case "price":
        setPrice(Number(value));
        break;
      case "caffeine":
        setCaffeine(Number(value));
        break;
      case "ingredients":
        setIngredients(
          Array.from(e.target.selectedOptions, (option) => option.value),
        );
        break;
    }
  };

  const handleUpdateCoffeeData = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    setCaffeine(caffeine);
    setCoffeeName(coffeeName);
    setCountryOfOrigin(countryOfOrigin);
    setDescription(description);
    setImageUrl(imageUrl);
    setPrice(price);
    setIngredients(ingredients);

    fetch(
      `https://crudcrud.com/api/c7d37118a89a4bcdb7ddbcc79fa65b9e/coffees/${params.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          coffeeName,
          countryOfOrigin,
          description,
          imageUrl,
          price,
          caffeine,
          ingredients,
        }),
      },
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      console.log("Data has been UPDATED");
    });

    // Reset form fields
    navigate("/");
  };

  return (
    <form className={Styles.form}>
      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="coffeeName">Coffee Name</label>
          <input
            type="text"
            id="coffeeName"
            name="coffeeName"
            required
            className={Styles.input}
            value={coffeeName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className={Styles.input__group}>
          <label htmlFor="countryOfOrigin">Country of Origin</label>
          <input
            type="text"
            id="countryOfOrigin"
            name="countryOfOrigin"
            required
            className={Styles.input}
            value={countryOfOrigin}
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
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            required
            className={Styles.input}
            value={imageUrl}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className={Styles.input__group}>
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            min={0}
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
        <label htmlFor="caffeine">Caffeine (mg)</label>
        <input
          type="number"
          min={0}
          id="caffeine"
          name="caffeine"
          className={Styles.input}
          value={caffeine}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className={Styles.input__group}>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          className={Styles.textarea}
          value={ingredients}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <p className={Styles.input__description}>
          Hold Ctrl (or Cmd) to select multiple ingredients
        </p>
      </div>

      <Btn
        bgColor={"#7D5A50"}
        label={"Update Coffee"}
        path={"#"}
        action={handleUpdateCoffeeData}
      />
    </form>
  );
}

export default UpdateCoffeeDataForm;
