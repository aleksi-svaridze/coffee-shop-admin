import { Link } from "react-router-dom";
import Styles from "./Btn.module.css";

function Btn({ bgColor, label, path }) {
  return (
    <Link to={path} className={Styles.btn} style={{ backgroundColor: bgColor }}>
      {label}
    </Link>
  );
}

export default Btn;
