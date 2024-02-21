import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";

import s from "./Header.module.css";

import iconTG from "../../assets/icons/iconTG.svg";
import mainLogo from "../../assets/images/main_logo.png";
import iconMail from "../../assets/icons/iconMail.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.container} id="header">
      <ul className={s.header_list}>
        <li className={s.nav_menu}>
          <NavMenu />
          <p className={s.text_menu}>menu</p>
        </li>
        <li className={s.logo_item}>
          <NavLink to="/">
            <img className={s.logo} src={mainLogo} alt="logo" />
          </NavLink>
        </li>
        <li className={s.contacts}>
          <p className={s.phone}>+380 00 000 00 00</p>
          <img className={s.email} src={iconMail} alt="mail" />
          <img className={s.icon_t} src={iconTG} alt="telegram" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
