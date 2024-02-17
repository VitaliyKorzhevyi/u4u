import s from "./Banner.module.css";

import bannerMobile from "../../../assets/images/main_banner_mobile.jpg";

const Banner = () => {
  return (
    <div className={s.container}>
      <h1>
        Support 4 <span>Ukraine</span>
      </h1>
      <p className={s.text}>
        Source of useful and verified information for Ukrainians from volunteers
        in the USA
      </p>
      <p className={s.text_disclaimer}>
        <span>Disclaimer:</span>
        <br />
        We're great at advice, not so great at legal jargon. This isn't legal or
        professional counsel. For that, it's best to consult a certified expert.
        They wear suits for a reason!
      </p>
      <img className={s.banner_mob} src={bannerMobile} alt="banner" />
    </div>
  );
};

export default Banner;
