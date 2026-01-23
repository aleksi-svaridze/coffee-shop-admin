import { Link } from "react-router-dom";
import Styles from "./Btn.module.css";

function Btn({ bgColor, label, path, action, id }) {
  return (
    <Link
      to={path}
      onClick={id ? () => action(id) : (e) => action(e)}
      className={Styles.btn}
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </Link>
  );
}

export default Btn;
