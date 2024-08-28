import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/kloxar01/"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Kloxar01"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/egor-anenkov-142b081b5/"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </footer> 
    );
}
 
export default Footer;