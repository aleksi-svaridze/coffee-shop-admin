import Styles from "./Header.module.css";
import Btn from "../buttons/Btn";

function Header({ btnLabel, headerTitle, btnBgColor, path }) {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.header__title}>{headerTitle}</h1>
      <Btn bgColor={btnBgColor} label={btnLabel} path={path} />
    </header>
  );
}

export default Header;
