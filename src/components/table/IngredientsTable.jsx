import { useLocation } from "react-router-dom";
import Btn from "../buttons/Btn";
import Styles from "./Table.module.css";

function IngredientsTable({
  value_1,
  value_2,
  value_3,
  value_4,
  value_5,
  data,
  deleteIngredient,
}) {
  const location = useLocation();

  return (
    <div className={Styles.table}>
      <div className={Styles.table__header}>
        <div className={Styles.cell}>{value_1}</div>
        <div className={Styles.cell}>{value_2}</div>
        <div className={Styles.cell}>{value_3}</div>
        <div className={Styles.cell}>{value_4}</div>
        <div className={Styles.cell}>{value_5}</div>
        <div className={Styles.cell}>Actions</div>
      </div>
      {data.map((item) => (
        <div key={item.id} className={Styles.table__body}>
          <div className={Styles.cell}>{item.id}</div>
          <div className={Styles.cell}>{item.ingredientName}</div>
          <div className={Styles.cell}>{item.price}</div>
          <div className={Styles.cell}>{item.strength}</div>
          <div className={Styles.cell}>{item.flavor}</div>
          <div className={Styles.table__flex_cell}>
            {location.pathname === "/" && (
              <Btn
                bgColor={"#B4846C"}
                label={"View"}
                path={`/coffee/${item.id}`}
              />
            )}

            <Btn
              bgColor={"#7d5a50"}
              label={"Edit"}
              path={`/update-ingredients/${item.id}`}
              id={item.id}
            />
            <Btn
              bgColor={"#e74c3c"}
              label={"Delete"}
              path={"#"}
              id={item.id}
              action={deleteIngredient}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngredientsTable;
