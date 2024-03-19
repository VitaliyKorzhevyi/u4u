import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

import s from "./EducationalSection.module.css";

import nature from "../../../assets/images/main_comp_educational2.png";
import logo from "../../../assets/images/main_support_4_uk.png";

import deskPhoto1 from "../../../assets/images/main_comp_educational_desk1.png";
import deskPhoto2 from "../../../assets/images/main_comp_educational_desk2.png";
import deskPhoto3 from "../../../assets/images/main_comp_educational_desk3.png";

const EducationalSection = () => {
  const isMobile = window.innerWidth < 1000;


  const attributes1 = isMobile
  ? {}
  : {
      initial: { y: 270 },
      whileInView: { y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },

    };

  const attributes2 = isMobile
    ? {}
    : {
        initial: { y: 270, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      };


  return (
    <motion.div className={s.container} {...attributes1}>
      <motion.h2 {...attributes2} className={s.title_desk}>
        Educational Resources
      </motion.h2>
      <ul className={s.list}>
        <li className={s.title_mob}>
          <h2>Educational Resources</h2>
        </li>
        <motion.li className={s.item_text1} {...attributes2}>
          <p>
            Here, you'll discover a range of resources, from language courses
            and educational programs to scholarship opportunities.
          </p>
        </motion.li>
        <motion.li className={s.desk_photo1} {...attributes2}>
          <img src={deskPhoto1} alt="photo_educational" />
        </motion.li>
        <li className={s.photo}>
          <motion.img
            className={s.desk_img}
            src={deskPhoto3}
            alt="nature"
            {...attributes2}
          />
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
            <MainBtnLink
              textColor="#00296b"
              bgColor="#fdda5c"
              height="71px"
              width="100%"
              pdLeft="6px"
            />
          </NavLink>
        </li>
        <li className={s.btn_mobile}>
          <NavLink to="/educational">
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" mrRight="10px" />
          </NavLink>
        </li>
      </ul>
    </motion.div>
  );
};

export default EducationalSection;
