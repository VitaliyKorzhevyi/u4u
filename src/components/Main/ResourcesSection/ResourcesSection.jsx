import s from "./ResourcesSection.module.css";

import resourcesPhoto from "../../../assets/images/main_comp_resources.png";
import resourcesPhotoDesc from "../../../assets/images/main_comp_resources_desc.png";

import { NavLink } from "react-router-dom";
import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

const ResourcesSection = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Resources for Adapting</h2>
      <ul className={s.list_content}>
        <li>
          <p className={s.text}>
            Here, you'll find a wealth of resources, from language and cultural
            integration tools to legal and healthcare assistance, designed to
            help you adapt and thrive in your new environment.
          </p>
        </li>
        <li>
          <p className={s.text}>
            This section is dedicated to providing essential guidance and
            support for Ukrainians who have recently arrived in the United
            States through the U4U program.
          </p>
        </li>
        <li className={s.item_desk_img1}>
          <img src={resourcesPhotoDesc} alt="resources_photo" />
        </li>
        <li className={s.item_desk_img2}>
          <img src={resourcesPhoto} alt="resources_photo" />
        </li>
        <li className={s.btn_desk}>
          <NavLink to="/resources">
            <MainBtnLink textColor="#00296b" bgColor="#fdda5c" height="71px" width="329px"/>
          </NavLink>
        </li>
      </ul>
      <div className={s.btn_mobile}>
        <NavLink to="/resources">
          <MainBtnLink textColor="#00296b" bgColor="#fdda5c" />
        </NavLink>
      </div>
    </div>
  );
};

export default ResourcesSection;
