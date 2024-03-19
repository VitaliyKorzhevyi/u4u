import s from "./Educational.module.css";

import DocumentEducational from "../../components/Educational/Document/DocumentEducational";
import RelevantArticlesE from "../../components/Educational/RelevantArticles/RelevantArticlesE";


import bannerMob from "../../assets/images/edu_banner_mob.png";
import bannerDesk from "../../assets/images/edu_banner_desk.png";

const Educational = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Educational <span>Resources</span></h2>
      <img className={s.banner_mob} src={bannerMob} alt="photo1" />
      <img className={s.banner_desk} src={bannerDesk} alt="photo1" />
      <div className={s.content_desk}>
        <RelevantArticlesE />
        <DocumentEducational />
      </div>
    </div>
  );
};

export default Educational;
