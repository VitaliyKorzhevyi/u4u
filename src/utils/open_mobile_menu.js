export const toggleMobileMenu = (
  isOpen,
  navMenuContainerClassName,
  navMenuContainerOpenClassName
) => {
  const navMenuContainer = document.querySelector(
    `.${navMenuContainerClassName}`
  );
  if (navMenuContainer) {
    navMenuContainer.classList.toggle(navMenuContainerOpenClassName, isOpen);
  }
  document.body.style.overflow = !isOpen ? "auto" : "hidden";
};
