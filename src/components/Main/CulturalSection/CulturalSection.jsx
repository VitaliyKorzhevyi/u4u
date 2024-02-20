import s from "./CulturalSection.module.css";

import culturalPhoto1 from "../../../assets/images/main_comp_cultural1.png";
import culturalPhoto2 from "../../../assets/images/main_comp_cultural2.png";

const CulturalSection = () => {
  return (
    <div className={s.container}>
      <h2>Cultural Exploration</h2>
      <ul className={s.list}>
        <li>
          <p className={s.text1}>
            From vibrant ethnic festivals to historical landmarks steeped in
            significance, this section provides a comprehensive guide to
            immersive experiences.
          </p>
        </li>
        <li>
          <img src={culturalPhoto1} alt="" />
        </li>
        <li>
          <p className={s.text2}>
            The details about diverse communities, local traditions, and
            regional cuisines paint a vivid picture of America's multifaceted
            cultural landscape.
          </p>
        </li>
        <li>
          <img className={s.logo} src={culturalPhoto2} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default CulturalSection;
