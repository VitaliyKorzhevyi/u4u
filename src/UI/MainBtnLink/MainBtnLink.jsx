import s from "./MainBtnLink.module.css";

const MainBtnLink = ({
  textColor,
  bgColor,
  mrRight,
  height,
  width,
  pdLeft,
}) => {
  return (
    <button
      className={s.btn}
      type="button"
      style={{
        color: textColor,
        backgroundColor: bgColor,
        marginRight: mrRight,
        width: width,
        height: height,
      }}
    >
      <p
        style={{
          paddingLeft: pdLeft,
        }}
      >
        learn more
      </p>

      <svg>
        <path
          d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
          fill={textColor}
        />
      </svg>
    </button>
  );
};

export default MainBtnLink;
