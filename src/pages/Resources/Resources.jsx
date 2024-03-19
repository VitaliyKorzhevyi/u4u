import s from "./Resources.module.css";

import DocumentResources from "../../components/Resources/Document/DocumentResources";
import RelevantArticlesR from "../../components/Resources/RelevantArticles/RelevantArticlesR";

import bannerMob from "../../assets/images/res_banner_mob.png";
import bannerDesk from "../../assets/images/res_banner_desk.png";

const Resources = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
        Resources for <span>Adapting</span>
      </h2>
      <img className={s.banner_mob} src={bannerMob} alt="photo1" />
      <img className={s.banner_desk} src={bannerDesk} alt="photo1" />
      <div className={s.content_desk}>
        <RelevantArticlesR />
        <DocumentResources />
      </div>
    </div>
  );
};

export default Resources;
