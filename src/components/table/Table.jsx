import Btn from "../buttons/Btn";
import Styles from "./Table.module.css";

function Table({ data, deleteCoffee, editCoffee }) {
  return (
    <div className={Styles.table}>
      <div className={Styles.table__header}>
        <div className={Styles.cell}>ID</div>
        <div className={Styles.cell}>Name</div>
        <div className={Styles.cell}>Origin</div>
        <div className={Styles.cell}>Coffeine</div>
        <div className={Styles.cell}>Price</div>
        <div className={Styles.cell}>Actions</div>
      </div>
      {data.map((item) => (
        <div key={item.id} className={Styles.table__body}>
          <div className={Styles.cell}>{item.id}</div>
          <div className={Styles.cell}>{item.name}</div>
          <div className={Styles.cell}>{item.origin}</div>
          <div className={Styles.cell}>{item.caffeine}</div>
          <div className={Styles.cell}>{item.price}</div>
          <div className={Styles.table__flex_cell}>
            <Btn bgColor={"#B4846C"} label={"View"} path={`/${item.id}`} />
            <Btn
              bgColor={"#7d5a50"}
              label={"Edit"}
              path={`/${item.id}`}
              id={item.id}
              action={editCoffee}
            />
            <Btn
              bgColor={"#e74c3c"}
              label={"Delete"}
              path={`/${item.id}`}
              id={item.id}
              action={deleteCoffee}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
