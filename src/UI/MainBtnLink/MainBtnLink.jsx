import s from "./MainBtnLink.module.css";

import arrow from "../../assets/icons/ArrowBtn.svg";

const MainBtnLink = ({textColor, bgColor}) => {
  return (
    <button type="button" style={{ color: textColor, backgroundColor: bgColor }}>
      learn more <img src={arrow} alt=">" />
    </button>
  );
};

export default MainBtnLink;
