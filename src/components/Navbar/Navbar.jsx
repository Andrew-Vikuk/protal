import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
    return(
        <nav className={style.nav}>
        <div className={style.nav_item}>
          <NavLink className={style.nav_link} activeClassName={style.active} to="/html">HTML</NavLink>
        </div>
        <div className={style.nav_item}>
          <NavLink className={style.nav_link} activeClassName={style.active} to="/css">CSS</NavLink>
        </div>
        <div className={style.nav_item}>
          <NavLink className={style.nav_link} activeClassName={style.active} to="/javascript">JavaScript</NavLink>
        </div>
      </nav>
    );
};

export default Navbar;