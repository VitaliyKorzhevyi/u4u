import s from "./Community.module.css";

import DocumentCommunity from "../../components/Community/Document/DocumentCommunity";
import RelevantArticlesC from "../../components/Community/RelevantArticles/RelevantArticlesC";

import bannerMob from "../../assets/images/comm_banner_mob.png";
import bannerDesk from "../../assets/images/comm_banner_desk.png";

const Community = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
      Community and <span>Support</span>
      </h2>
      <img className={s.banner_mob} src={bannerMob} alt="photo1" />
      <img className={s.banner_desk} src={bannerDesk} alt="photo1" />
      <div className={s.content_desk}>
        <RelevantArticlesC />
        <DocumentCommunity />
      </div>
    </div>
  );
};

export default Community;
