import { useLocation } from "react-router-dom";
import Btn from "../buttons/Btn";
import Styles from "./Table.module.css";

function Table({
  value_1,
  value_2,
  value_3,
  value_4,
  value_5,
  data,
  deleteCoffee,
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
        <div key={item._id} className={Styles.table__body}>
          <div className={Styles.cell}>{item.coffeeName}</div>
          <div className={Styles.cell}>{item.coffeeName}</div>
          <div className={Styles.cell}>
            {location.pathname !== "/" ? item.price : item.countryOfOrigin}
          </div>
          <div className={Styles.cell}>
            {location.pathname !== "/" ? item.strength : item.caffeine}
          </div>
          <div className={Styles.cell}>
            {location.pathname !== "/" ? item.flavor : item.price}
          </div>
          <div className={Styles.table__flex_cell}>
            {location.pathname === "/" && (
              <Btn
                bgColor={"#B4846C"}
                label={"View"}
                path={`/coffee/${item._id}`}
              />
            )}

            <Btn
              bgColor={"#7d5a50"}
              label={"Edit"}
              path={`/update-coffee/${item._id}`}
              id={item._id}
            />
            <Btn
              bgColor={"#e74c3c"}
              label={"Delete"}
              path={"#"}
              id={item._id}
              action={deleteCoffee}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
