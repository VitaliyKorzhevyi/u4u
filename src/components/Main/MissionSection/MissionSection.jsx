import s from "./MissionSection.module.css";

import { motion } from "framer-motion";

import missionPhoto from "../../../assets/images/main_comp_mission.png";
import logo from "../../../assets/images/main_support_4_uk.png";
import missionPhotoDesk from "../../../assets/images/main_comp_mission_desk.png";
import logo1 from "../../../assets/icons/main_comp_mission_desk.svg";

const MissionSection = () => {
  const isMobile = window.innerWidth < 1000;

  const attributes1 = isMobile
    ? {}
    : {
        initial: { y: 130, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.4 },
      };

      const attributes2 = isMobile
      ? {}
      : {
          initial: { y: 160, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.8 },
        };

  return (
    <div className={s.container}>
      <motion.img className={s.logo} src={logo} alt="Support for Ukraine" {...attributes1}/>
      <motion.div {...attributes1} className={s.mission_sub_cont1}>
        <motion.img {...attributes2} className={s.logo_desk} src={logo1} alt="logo" />{" "}
        <h2 >Our Mission</h2>
      </motion.div>

      <div className={s.mission_sub_cont2}>
        <motion.p {...attributes2}>
          Our mission is to empower and unite Ukrainians who have embraced new
          beginnings in the United States. We are dedicated to being the go-to
          platform for those who have embarked on their American journey,
          providing them with the support and opportunities they need to thrive.
        </motion.p>
        <img className={s.photo_desk} src={missionPhotoDesk} alt="photo1" />
        <img className={s.photo_mob} src={missionPhoto} alt="photo1" />
      </div>
    </div>
  );
};

export default MissionSection;
