import s from "./MissionSection.module.css";

import missionPhoto from "../../../assets/images/main_comp_mission.png"
import logo from "../../../assets/images/main_support_4_uk.png"

const MissionSection = () => {
  return (
    <div className={s.container}>
      <img className={s.logo} src={logo} alt="Support for Ukraine" />
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower and unite Ukrainians who have embraced new
        beginnings in the United States. We are dedicated to being the go-to
        platform for those who have embarked on their American journey,
        providing them with the support and opportunities they need to thrive.
      </p>
      <img src={missionPhoto} alt="photo1" />
    </div>
  );
};

export default MissionSection;
