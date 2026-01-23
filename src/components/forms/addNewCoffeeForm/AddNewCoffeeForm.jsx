import Styles from "./AddNewCoffeeForm.module.css";
import Btn from "../../buttons/Btn";

function AddNewCoffeeForm() {
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
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
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
        <label htmlFor="caffeine">Caffeine (mg)</label>
        <input
          type="number"
          min={0}
          id="caffeine"
          name="caffeine"
          className={Styles.input}
        />
      </div>

      <div className={Styles.input__group}>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          className={Styles.textarea}
          value={"Ingredient"}
        ></textarea>
        <p className={Styles.input__description}>
          Hold Ctrl (or Cmd) to select multiple ingredients
        </p>
      </div>

      <Btn bgColor={"#7D5A50"} label={"Add Coffee"} path={"#"} />
    </form>
  );
}

export default AddNewCoffeeForm;
