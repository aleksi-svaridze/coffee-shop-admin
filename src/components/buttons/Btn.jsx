import { Link } from "react-router-dom";
import Styles from "./Btn.module.css";

function Btn({ bgColor, label, path, action, id }) {
  return (
    <Link
      to={id ? "#" : path}
      onClick={() => action(id)}
      className={Styles.btn}
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </Link>
  );
}

export default Btn;
