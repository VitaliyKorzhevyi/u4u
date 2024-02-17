import { NavLink } from "react-router-dom";

import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

import s from "./EducationalSection.module.css";

import photo from "../../../assets/images/main_comp_educational2.jpg";
import logo from "../../../assets/images/main_comp_educational1.png";


const EducationalSection = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <h2>Educational Resources</h2>
        </li>
        <li>
          <p>
            Here, you'll discover a range of resources, from language courses
            and educational programs to scholarship opportunities.
          </p>
        </li>
        <li className={s.photo}>
          <img src={photo} alt="photo" />
        </li>
        <li>
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
          <NavLink>
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EducationalSection;
