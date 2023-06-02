import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            
            <div className={style.footerBottom}>
                <p>copyright &copy;2022
                     <Link to="/home">UZHNU...</Link>
                </p>
                <div className={style.footerMenu}>
                    <ul className={style.fMenu}>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                        <Link to="/html">HTML</Link>
                        </li>
                        <li>
                            <Link to="/css">CSS</Link>
                        </li>
                        <li>
                            <Link to="/js">JS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;