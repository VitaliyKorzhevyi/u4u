import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";

import MySVGIcon from "../../assets/icons/iconMail.svg";
import iconTG from "../../assets/icons/iconTG.svg";
import footerLabel from "../../assets/images/footer_label.png";
import footerLogo from "../../assets/images/footer_logo.png";
import { menuItems } from "../../utils/nav_menu_items";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.sub_container1}>
        <NavLink to="/">
          <img src={footerLabel} alt="label" />
        </NavLink>
        <span className={s.icons}>
        <a href="mailto:admin@support4ukraine.org">
            <img className={s.i_email} src={MySVGIcon} alt="" />
          </a>
          <img className={s.i_tg} src={iconTG} alt="telegram" />

        </span>
      </div>

      <ul className={s.list}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>
              <p>{item.text}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={s.sub_container2}>
        <p>©All rights reserved</p>
        <NavLink to="/">
          <img src={footerLogo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
