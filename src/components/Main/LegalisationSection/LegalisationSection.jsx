import { useEffect } from "react";
import s from "./LegalisationSection.module.css";

const LegalisationSection = () => {
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
      <h2 className={s.title}>Legalisation Process tips</h2>
      <ul className={s.list}>
        <li>
          <p>
            Navigating the complexities of document legalization demands
            precision and a keen understanding of procedural intricacies.
          </p>
        </li>
        <li>
          <p>
            Our 'Legalization Process Tips' section is designed as a valuable
            resource, providing practical guidance and expert insights to
            simplify the authentication journey.
          </p>
        </li>
        <li>
          <p>
            Discover a wealth of helpful advice aimed at streamlining the
            process of document authentication.
          </p>
        </li>
      </ul>
      <div className={s.lines}>
        {[...Array(3)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default LegalisationSection;
