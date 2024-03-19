import { useState } from "react";
import s from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../utils/nav_menu_items";
import { toggleMobileMenu } from "../../utils/open_mobile_menu";

import mainLogo from "../../assets/images/main_logo.png";
import navLogo from "../../assets/images/nav_menu_logo.png";
import iconMenu from "../../assets/icons/iconMenu.svg";
import iconCross from "../../assets/icons/iconCross.svg";

import iconTG from "../../assets/icons/iconTG.svg";
import iconIn from "../../assets/icons/iconInstagram.svg";

import iconMail from "../../assets/icons/iconMail.svg";

const NavMenu = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(true);

  const toggleContainer = () => {
    setIsContainerOpen(!isContainerOpen);
    toggleMobileMenu(isContainerOpen, s.nav_menu_container, s.open);
  };

  return (
    <>
      <img
        className={s.menu_toggle}
        src={iconMenu}
        alt="≡"
        onClick={toggleContainer}
      />
      <div className={s.nav_menu_container}>
        <img
          className={s.icon_cross}
          src={iconCross}
          alt="X"
          onClick={toggleContainer}
        />
        <NavLink to="/" onClick={toggleContainer}>
          <img className={s.nav_logo1} src={mainLogo} alt="logo" />
        </NavLink>
        <ul className={s.list}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} onClick={toggleContainer}>
                <p>{item.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={s.nav_menu_sub_container}>
          <div className={s.list_icons}>
            <a href="mailto:Inbox@support4ukraine.org">
              <img className={s.email} src={iconMail} alt="mail" />
            </a>
            <a href="https://t.me/ukrainian_in_us">
              <img className={s.i_inst} src={iconIn} alt="instagram" />
            </a>

            <a href="https://t.me/ukrainian_in_us">
              <img className={s.i_tg} src={iconTG} alt="telegram" />
            </a>
          </div>
          <img src={navLogo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
