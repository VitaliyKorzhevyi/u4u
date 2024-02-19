import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";

import MySVGIcon from "../../assets/icons/iconMail.svg";
import iconTG from "../../assets/icons/iconTG.svg";
import footerLabel from "../../assets/images/footer_label.png";
import footerLogo from "../../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.sub_container1}>
        <NavLink to="/">
          <img src={footerLabel} alt="label" />
        </NavLink>
        <span>
          <img src={iconTG} alt="telegram" />
          <img src={MySVGIcon} alt="" />
        </span>
      </div>
      <ul className={s.list}>
        <li>
          <NavLink to="/resources">
            <p>Resources for Adapting</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/educational">
            <p>Educational Resources</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/community">
            <p>Community and Support</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">
            <p>Testimonials</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/legalisation">
            <p>Legalisation Process tips</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cultural">
            <p>Cultural Exploration</p>
          </NavLink>
        </li>
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
