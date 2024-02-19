import s from "./ResourcesSection.module.css";

import resourcesPhoto from "../../../assets/images/main_comp_resources.jpg";
import { NavLink } from "react-router-dom";
import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

const ResourcesSection = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Resources for Adapting</h2>
      <ul className={s.list_content}>
        <li>
          <p>
            Here, you'll find a wealth of resources, from language and cultural
            integration tools to legal and healthcare assistance, designed to
            help you adapt and thrive in your new environment.
          </p>
        </li>
        <li>
          <p>
            This section is dedicated to providing essential guidance and
            support for Ukrainians who have recently arrived in the United
            States through the U4U program.
          </p>
        </li>
        <li>
          <img
            src={resourcesPhoto}
            alt="resources_photo"
          />
        </li>
      </ul>
      <NavLink to="/resources">
        <MainBtnLink textColor="#00296b" bgColor="#fdda5c" />
      </NavLink>
    </div>
  );
};

export default ResourcesSection;
