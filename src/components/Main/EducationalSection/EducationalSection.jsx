import { NavLink } from "react-router-dom";

import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

import s from "./EducationalSection.module.css";

import nature from "../../../assets/images/main_comp_educational2.png";
import logo from "../../../assets/images/main_support_4_uk.png";


const EducationalSection = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <h2>Educational Resources</h2>
        </li>
        <li className={s.item_text1}>
          <p>
            Here, you'll discover a range of resources, from language courses
            and educational programs to scholarship opportunities.
          </p>
        </li>
        <li className={s.photo}>
          <img src={nature} alt="nature" />
        </li>
        <li className={s.item_text1}>
          <p>
            We're committed to supporting your educational journey and
            empowering you to reach your full potential in the U.S. education
            system.
          </p>
        </li>
        <li className={s.logo}>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <NavLink to="/educational">
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" mrRight="10px"/>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EducationalSection;
