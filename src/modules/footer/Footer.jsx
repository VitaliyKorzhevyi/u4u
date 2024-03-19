import { HashLink as NavLink } from "react-router-hash-link";

import { motion } from "framer-motion";

import s from "./Footer.module.css";

import { menuItems } from "../../utils/nav_menu_items";

import iconMail from "../../assets/icons/iconMail.svg";
import iconTG from "../../assets/icons/iconTG.svg";
import iconIn from "../../assets/icons/iconInstagram.svg";
import footerLabel from "../../assets/images/footer_label.png";
import footerLogo from "../../assets/images/footer_logo.png";

const Footer = () => {
  const isMobile = window.innerWidth < 1000;

  const attributes1 = isMobile
    ? {}
    : {
        initial: { y: 10, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.4 },
      };

  return (
    <motion.div className={s.container} {...attributes1}>
      <div className={s.container_content}>
        <div className={s.desk_info}>
          <div className={s.sub_container1}>
            <NavLink to="/#header">
              <img className={s.label_desk} src={footerLabel} alt="label" />
            </NavLink>
            <span className={s.icons_mob}>
              <a href="mailto:admin@support4ukraine.org">
                <img className={s.i_email} src={iconMail} alt="mail" />
              </a>
              <a href="https://www.instagram.com/support_for_ukraine_org?igsh=em94cG83Y2QwMndl&utm_source=qr">
                <img className={s.i_inst} src={iconIn} alt="instagram" />
              </a>
              <a href="https://t.me/ukrainian_in_us">
                <img className={s.i_tg} src={iconTG} alt="telegram" />
              </a>
            </span>
          </div>
          <div className={s.nav_menu_desk}>
            <ul className={s.list}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>
                    <p>{item.text}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className={s.icons_desk}>
              <a href="https://www.instagram.com/support_for_ukraine_org?igsh=em94cG83Y2QwMndl&utm_source=qr">
                <img className={s.i_inst} src={iconIn} alt="instagram" />
              </a>
              <a href="mailto:Inbox@support4ukraine.org">
                <img className={s.i_mail} src={iconMail} alt="mail" />
              </a>
              <a href="https://t.me/ukrainian_in_us">
                <img className={s.i_tg} src={iconTG} alt="telegram" />
              </a>
            </span>
          </div>
        </div>
        <div className={s.sub_container2}>
          <p>©All rights reserved</p>

          <NavLink to="/#header" className={s.logo_mob}>
            <img src={footerLogo} alt="logo" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
