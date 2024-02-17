import Banner from "../../components/Main/Banner/Banner";
import CommunitySection from "../../components/Main/CommunitySection/CommunitySection";
import CulturalSection from "../../components/Main/CulturalSection/CulturalSection";
import EducationalSection from "../../components/Main/EducationalSection/EducationalSection";
import LegalisationSection from "../../components/Main/LegalisationSection/LegalisationSection";
import MissionSection from "../../components/Main/MissionSection/MissionSection";
import ResourcesSection from "../../components/Main/ResourcesSection/ResourcesSection";
import TestimonialsSection from "../../components/Main/TestimonialsSection/TestimonialsSection";

const Main = () => {
  return (
    <>
      <Banner />
      <ResourcesSection />
      <EducationalSection />
      <CommunitySection />
      <MissionSection />
      <TestimonialsSection />
      <LegalisationSection />
      <CulturalSection />
    </>
  );
};

export default Main;
