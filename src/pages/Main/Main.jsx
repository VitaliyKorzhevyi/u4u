import Banner from "../../components/Main/Banner/Banner";
import CommunitySection from "../../components/Main/CommunitySection/CommunitySection";
import EducationalSection from "../../components/Main/EducationalSection/EducationalSection";
import MissionSection from "../../components/Main/MissionSection/MissionSection";
import ResourcesSection from "../../components/Main/ResourcesSection/ResourcesSection";
// import TestimonialsSection from "../../components/Main/TestimonialsSection/TestimonialsSection";
// import LegalisationSection from "../../components/Main/LegalisationSection/LegalisationSection";
// import CulturalSection from "../../components/Main/CulturalSection/CulturalSection";

import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.container}>
      <Banner />
      <ResourcesSection />
      <EducationalSection />
      <CommunitySection />
      <MissionSection />
      {/* <TestimonialsSection />
      <LegalisationSection />
      <CulturalSection /> */}
    </div>
  );
};

export default Main;
