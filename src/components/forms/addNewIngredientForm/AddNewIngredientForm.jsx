import Styles from "./AddNewIngredientForm.module.css";
import Btn from "../../buttons/Btn";

function AddNewIngredientForm() {
  return (
    <form className={Styles.form}>
      <h1>Add New Ingredient</h1>
      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="ingredientName">Ingredient Name</label>
          <input
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
          id="description"
          name="description"
          className={Styles.textarea}
        ></textarea>
      </div>

      <div className={Styles.input__group_wrapper}>
        <div className={Styles.input__group}>
          <label htmlFor="strength">Strength</label>

          <select id="strength" name="strength" className={Styles.select}>
            <option value="mild">Mild</option>
            <option value="medium">Medium</option>
            <option value="strong">Strong</option>
          </select>
        </div>

        <div className={Styles.input__group}>
          <label htmlFor="flavor">Flavor Profile</label>
          <input
            type="text"
            id="flavor"
            name="flavor"
            required
            className={Styles.input}
          />
        </div>
      </div>

      <Btn bgColor={"#7D5A50"} label={"Add Ingredient"} path={"#"} />
    </form>
  );
}

export default AddNewIngredientForm;
