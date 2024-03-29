import { NavLink } from "react-router-dom";
import s from "./NavBtnsPages.module.css";

const NavBtnsPages = () => {
  return (
    <div className={s.btns_desk}>
      <a href="https://t.me/ukrainian_in_us">
        <button className={s.btn_t} type="button">
          <p>telegram</p>{" "}
          <svg>
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="#FFFFFA"
            />
          </svg>
        </button>
      </a>

      <NavLink to="/">
        <button className={s.btn_mp} type="button">
          <p>to the main page</p>{" "}
          <svg>
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="#00296B"
            />
          </svg>
        </button>
      </NavLink>
    </div>
  );
};

export default NavBtnsPages;
