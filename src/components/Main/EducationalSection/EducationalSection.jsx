import { NavLink } from "react-router-dom";

import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

import s from "./EducationalSection.module.css";

import nature from "../../../assets/images/main_comp_educational2.png";
import logo from "../../../assets/images/main_support_4_uk.png";

import deskPhoto1 from "../../../assets/images/main_comp_educational_desk1.png";
import deskPhoto2 from "../../../assets/images/main_comp_educational_desk2.png";
import deskPhoto3 from "../../../assets/images/main_comp_educational_desk3.png";

const EducationalSection = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title_desk}>Educational Resources</h2>
      <ul className={s.list}>
        <li className={s.title_mob}>
          <h2>Educational Resources</h2>
        </li>
        <li className={s.item_text1}>
          <p>
            Here, you'll discover a range of resources, from language courses
            and educational programs to scholarship opportunities.
          </p>
        </li>
        <li className={s.desk_photo1}>
          <img src={deskPhoto1} alt="photo_educational" />
        </li>
        <li className={s.photo}>
          <img className={s.desk_img} src={deskPhoto3} alt="nature" />
          <img className={s.mob_img} src={nature} alt="nature" />
        </li>
        <li className={s.desk_photo2}>
          <img src={deskPhoto2} alt="photo_educational" />
        </li>
        <li className={s.item_text1}>
          <p>
            We're committed to supporting your educational journey and
            empowering you to reach your full potential in the U.S. education
            system.
          </p>
        </li>
        <li className={s.logo}>
          <div className={s.logo_container}>
            <img src={logo} alt="logo" />
          </div>

          <NavLink to="/educational" className={s.btn_desk}>
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" height="71px" width="329px"/>
          </NavLink>
        </li>
        <li className={s.btn_mobile}>
          <NavLink to="/educational">
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" mrRight="10px" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EducationalSection;
