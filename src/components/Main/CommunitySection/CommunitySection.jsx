import { NavLink } from "react-router-dom";
import MainBtnLink from "../../../UI/MainBtnLink/MainBtnLink";
import s from "./CommunitySection.module.css";
import { useEffect } from "react";

const CommunitySection = () => {
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
      <h2 className={s.title}>
        <span>Community </span>
        <span>and Support</span>
      </h2>
      <ul className={s.list}>
        <li>
          <p>
            Is a hub for Ukrainians who have recently arrived in the United
            States or have been living here for some time.
          </p>
        </li>
        <li>
          <p>
            This is where you can connect with like-minded individuals, engage
            with vibrant Ukrainian communities, and access essential support
            networks.
          </p>
        </li>
        <li>
          <p>
            Whether you're seeking advice, friendship, or a sense of belonging,
            this is your gateway to a welcoming and vibrant Ukrainian community
            in the U.S.
          </p>
        </li>
      </ul>
      <div className={s.lines}>
        {[...Array(3)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <NavLink to="/community">
        <MainBtnLink textColor="#FFFFFA" bgColor="#00509D" />
      </NavLink>
    </div>
  );
};

export default CommunitySection;
