import s from "./Banner.module.css";

import { motion } from "framer-motion";

import bannerMobile from "../../../assets/images/main_banner_mobile.jpg";
import bannerDesc from "../../../assets/images/main_banner_desk.png";

const Banner = () => {
  const isMobile = window.innerWidth < 1000;

  const attributesBase = isMobile
    ? {}
    : {
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.7, delay: 1 },
        viewport: { once: true },
      };

  const attributes1 = isMobile
    ? {}
    : {
        initial: { y: -40, opacity: 0 },
      };

  const attributes2 = isMobile
    ? {}
    : {
        initial: { y: -20, opacity: 0 },
      };

  const attributes3 = isMobile
    ? {}
    : {
        initial: { y: -60, opacity: 0 },
      };

  return (
    <div className={s.container}>
      <h1>
        Support 4 <span>Ukraine</span>
      </h1>
      <div>
        <motion.p className={s.text} {...attributes2} {...attributesBase}>
          Source of useful and verified information for Ukrainians from
          volunteers in the USA
        </motion.p>
        <motion.p
          className={s.text_disclaimer}
          {...attributes3}
          {...attributesBase}
        >
          <span>Disclaimer:</span>
          <br />
          We're great at advice, not so great at legal jargon. This isn't legal
          or professional counsel. For that, it's best to consult a certified
          expert. They wear suits for a reason!
        </motion.p>
        <motion.img
          className={s.banner_desc}
          src={bannerDesc}
          alt="banner"
          {...attributesBase}
          {...attributes1}
        />
        <img className={s.banner_mob} src={bannerMobile} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
