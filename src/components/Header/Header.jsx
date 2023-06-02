import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../img/logo_uzh.png"
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
            <Link  to="/home">
                <img class="logo" src={logo}/>
             </Link>
             
            </div>
            <ThemeSwitcher />
            <div className={style.menu}>
                <Link className={style.link} to="/home">
                    <div className={style.title}>HOME</div>
                    <div className={style.bar}></div>
                </Link>
                <Link className={style.link} to="/html">
                    <div className={style.title}>HTML</div>
                    <div className={style.bar}></div>
                </Link>
                <Link className={style.link} to="/css">
                    <div className={style.title}>CSS</div>
                    <div className={style.bar}></div>
                </Link>
                <Link className={style.link} to="js">
                    <div className={style.title}>JS</div>
                    <div className={style.bar}></div>
                </Link>
            </div>
        </header>
    );
};

export default Header;