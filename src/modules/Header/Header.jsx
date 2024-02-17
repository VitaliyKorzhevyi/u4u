import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";

import s from "./Header.module.css";

import iconTG from "../../assets/icons/iconTG.svg";
import mainLogo from "../../assets/images/main_logo.png";


const Header = () => {
  return (
    <header className={s.container}>
      <ul className={s.header_list}>
        <li>
          <NavMenu />
        </li>
        <li>
          <img className={s.logo} src={mainLogo} alt="logo" />
        </li>
        <li>
          <img className={s.icon_t} src={iconTG} alt="telegram" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
