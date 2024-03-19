import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { motion } from "framer-motion";

import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";

import s from "./CommunitySection.module.css";

const CommunitySection = () => {
  const isMobile = window.innerWidth < 1000;

  const attributes1 = isMobile
    ? {}
    : {
        initial: { y: -130, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.8 },
      };

  const attributesItemBase = isMobile
    ? {}
    : {
        whileInView: { x: "0vh", opacity: 1 },
        viewport: { once: true },
        transition: { duration: 1 },
      };

  const attributesItem1 = isMobile
    ? {}
    : {
        initial: { x: "82vh", opacity: 0 },
      };
  const attributesItem2 = isMobile
    ? {}
    : {
        initial: { x: "58vh", opacity: 0 },
      };
  const attributesItem3 = isMobile
    ? {}
    : {
        initial: { x: "28vh", opacity: 0 },
      };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${s.list}`);
      const scrollLeft = element.scrollLeft;
      const itemWidth = element.children[0].offsetWidth; // Ширина одного элемента списка
      const currentItemIndex = Math.floor(scrollLeft / itemWidth + 0.7); // Номер текущего элемента

      const spans = document.querySelectorAll(`.${s.lines} span`);
      spans.forEach((span, index) => {
        if (index === currentItemIndex) {
          span.style.backgroundColor = "#00509D"; // Цвет для текущего элемента
        } else {
          span.style.backgroundColor = "#b3cbde"; // Цвет для остальных элементов
        }
      });
    };

    const listElement = document.querySelector(`.${s.list}`);
    listElement.addEventListener("scroll", handleScroll);

    const firstSpan = document.querySelector(`.${s.lines} span:first-child`);
    firstSpan.style.backgroundColor = "#00509D";

    return () => {
      listElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={s.container}>
      <motion.h2 className={s.title} {...attributes1}>
        <p>
          <span>Community </span>
          <span>and Support. </span>
        </p>
        <p>
          <span>Legalisation </span>
          <span>Process tips</span>
        </p>
      </motion.h2>
      <ul className={s.list}>
        <motion.li {...attributesItem1} {...attributesItemBase}>
          <p>
            Is a hub for Ukrainians who have recently arrived in the United
            States or have been living here for some time.
          </p>
        </motion.li>
        <motion.li {...attributesItem2} {...attributesItemBase}>
          <p>
            This is where you can connect with like-minded individuals, engage
            with vibrant Ukrainian communities, and access essential support
            networks.
          </p>
        </motion.li>
        <motion.li {...attributesItem3} {...attributesItemBase}>
          <p>
            Whether you're seeking advice, friendship, or a sense of belonging,
            this is your gateway to a welcoming and vibrant Ukrainian community
            in the U.S.
          </p>
        </motion.li>
      </ul>
      <div className={s.lines}>
        {[...Array(3)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <NavLink to="/educational" className={s.btn_desk}>
        <MainBtnLink
          textColor="#FFFFFA"
          bgColor="#00509D"
          height="71px"
          width="370px"
          pdLeft="40px"
        />
      </NavLink>

      <NavLink to="/community" className={s.btn_mob}>
        <MainBtnLink textColor="#FFFFFA" bgColor="#00509D" />
      </NavLink>
    </div>
  );
};

export default CommunitySection;
