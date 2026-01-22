import Btn from "../buttons/Btn";
import Styles from "./Table.module.css";

function Table() {
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
      <div className={Styles.table__body}>
        <div className={Styles.cell}>cof_sample1</div>
        <div className={Styles.cell}>Ethiopian Yirgacheffe</div>
        <div className={Styles.cell}>Ethiopia</div>
        <div className={Styles.cell}>120mg</div>
        <div className={Styles.cell}>$4.99</div>
        <div className={Styles.table__flex_cell}>
          <Btn bgColor={"#B4846C"} label={"View"} path={"/coffee/1"} />
          <Btn bgColor={"#7d5a50"} label={"Edit"} path={"/coffee/1"} />
          <Btn bgColor={"#e74c3c"} label={"Delete"} path={"/coffee/1"} />
        </div>
      </div>
      <div className={Styles.table__body}>
        <div className={Styles.cell}>cof_sample1</div>
        <div className={Styles.cell}>Ethiopian Yirgacheffe</div>
        <div className={Styles.cell}>Ethiopia</div>
        <div className={Styles.cell}>120mg</div>
        <div className={Styles.cell}>$4.99</div>
        <div className={Styles.table__flex_cell}>
          <Btn bgColor={"#B4846C"} label={"View"} path={"/coffee/1"} />
          <Btn bgColor={"#7d5a50"} label={"Edit"} path={"/coffee/1"} />
          <Btn bgColor={"#e74c3c"} label={"Delete"} path={"/coffee/1"} />
        </div>
      </div>
      <div className={Styles.table__body}>
        <div className={Styles.cell}>cof_sample1</div>
        <div className={Styles.cell}>Ethiopian Yirgacheffe</div>
        <div className={Styles.cell}>Ethiopia</div>
        <div className={Styles.cell}>120mg</div>
        <div className={Styles.cell}>$4.99</div>
        <div className={Styles.table__flex_cell}>
          <Btn bgColor={"#B4846C"} label={"View"} path={"/coffee/1"} />
          <Btn bgColor={"#7d5a50"} label={"Edit"} path={"/coffee/1"} />
          <Btn bgColor={"#e74c3c"} label={"Delete"} path={"/coffee/1"} />
        </div>
      </div>
    </div>
  );
}

export default Table;
