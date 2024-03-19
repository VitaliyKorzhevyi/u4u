import s from "./ResourcesSection.module.css";

import { motion } from "framer-motion";

import resourcesPhoto from "../../../assets/images/main_comp_resources.png";
import resourcesPhotoDesk from "../../../assets/images/main_comp_resources_desk.png";
import resourcesPhotoMob from "../../../assets/images/main_comp_resources_mob.png";

import { NavLink } from "react-router-dom";
import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

const ResourcesSection = () => {
  const isMobile = window.innerWidth < 1000;

  const attributes1 = isMobile
    ? {}
    : {
        initial: { y: 250, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.5 },
      };

      const attributes2 = isMobile
      ? {}
      : {
          initial: { y: 70, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.5 },
        };

  return (
    <div className={s.container}>
      <motion.h2 className={s.title} {...attributes1}>
        Resources for Adapting
      </motion.h2>
      <ul className={s.list_content}>
        <motion.li initial={"hidden"} {...attributes1}>
          <p className={s.text}>
            Here, you'll find a wealth of resources, from language and cultural
            integration tools to legal and healthcare assistance, designed to
            help you adapt and thrive in your new environment.
          </p>
        </motion.li>
        <motion.li initial={"hidden"} {...attributes1}>
          <p className={s.text}>
            This section is dedicated to providing essential guidance and
            support for Ukrainians who have recently arrived in the United
            States through the U4U program.
          </p>
        </motion.li>
        <motion.li className={s.item_desk_img1} {...attributes2}>
          <img src={resourcesPhotoDesk} alt="resources_photo" />
        </motion.li>
        <motion.li className={s.item_desk_img2} {...attributes2}>
          <img src={resourcesPhoto} alt="resources_photo" />
        </motion.li>
        <motion.li className={s.btn_desk} {...attributes2}>
          <NavLink to="/resources">
            <MainBtnLink
              textColor="#00296b"
              bgColor="#fdda5c"
              height="71px"
              width="329px"
            />
          </NavLink>
        </motion.li>
        <motion.li className={s.item_mob_img} {...attributes2}>
          <img src={resourcesPhotoMob} alt="resources_photo" />
        </motion.li>
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
