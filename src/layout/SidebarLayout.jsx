import { NavLink, Outlet } from "react-router-dom";
import Styles from "./SidebarLayout.module.css";

function SidebarLayout() {
  return (
    <div className={Styles.container}>
      <aside className={Styles.sidebar}>
        <section className={Styles.sidebar__header}>
          <h1 className={Styles.sidebar____header_title}>Coffee Admin</h1>
          <p className={Styles.sidebar__header_desc}>Management Panel</p>
        </section>
        <nav className={Styles.sidebar__navbar}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? Styles.link + " " + Styles.active_link
                : Styles.link + " " + Styles.inactive_link
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add-coffee"
            className={({ isActive }) =>
              isActive
                ? Styles.link + " " + Styles.active_link
                : Styles.link + " " + Styles.inactive_link
            }
          >
            add coffee
          </NavLink>
          <NavLink
            to="/add-ingredients"
            className={({ isActive }) =>
              isActive
                ? Styles.link + " " + Styles.active_link
                : Styles.link + " " + Styles.inactive_link
            }
          >
            Manage Ingredients
          </NavLink>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}

export default SidebarLayout;
