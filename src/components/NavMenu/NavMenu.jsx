import s from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <div id="menu-toggle" className={s.menu_toggle}>
      <div id="hamburger" className={s.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="cross">
        <span></span>
        <span></span>
      </div>
      
    </div>
  );
};

export default NavMenu;
