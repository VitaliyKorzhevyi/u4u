import { useState } from "react";
import s from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../utils/nav_menu_items";
import { toggleMobileMenu } from "../../utils/open_mobile_menu";

import mainLogo from "../../assets/images/main_logo.png";
import navLogo from "../../assets/images/nav_menu_logo.png";

const NavMenu = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(true);

  const toggleContainer = () => {
    setIsContainerOpen(!isContainerOpen);
    toggleMobileMenu(isContainerOpen, s.nav_menu_container, s.open);
  };

  return (
    <>
      <div id="menu-toggle" className={s.menu_toggle} onClick={toggleContainer}>
        <div id="hamburger" className={s.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="cross">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={s.nav_menu_container}>
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
          <p className={s.phone}>+380 00 000 00 00</p>
          <img src={navLogo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
