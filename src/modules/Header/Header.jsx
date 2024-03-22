import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";

import s from "./Header.module.css";

import iconTG from "../../assets/icons/iconTG.svg";
import iconIn from "../../assets/icons/iconInstagram.svg";
import mainLogo from "../../assets/images/main_logo.png";
import iconMail from "../../assets/icons/iconMail.svg";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const Header = () => {
  const isMobile = window.innerWidth < 1000;

  const attributes = isMobile
    ? {}
    : {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.8 },

        viewport: { once: true },
      };

  return (
    <header className={s.container} id="header">
      <motion.ul className={s.header_list} {...attributes}>
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
          <a href="https://www.instagram.com/support_for_ukraine_org?igsh=em94cG83Y2QwMndl&utm_source=qr">
            <img className={s.i_inst} src={iconIn} alt="instagram" />
          </a>
          <a href="mailto:Inbox@support4ukraine.org">
            <img className={s.email} src={iconMail} alt="mail" />
          </a>
          <a href="https://t.me/ukrainian_in_us">
            <img className={s.i_tg} src={iconTG} alt="telegram" />
          </a>
        </li>
      </motion.ul>
    </header>
  );
};

export default Header;
