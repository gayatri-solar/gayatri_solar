import { TbMenuDeep } from "react-icons/tb";

const FloatingMenu = ({ show, isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className={`active:scale-105 
        lg:hidden
        lg:active:scale-100 
       border border-lime-950
        fixed top-8 right-8 z-50
        w-14 h-14 rounded-full bg-lime-500
        flex items-center justify-center
        transition-all duration-500 ease-out text-2xl
        ${show && !isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-24 opacity-0"}
        ${isOpen ? "pointer-events-none" : ""}
      `}
    >
      <TbMenuDeep color="#192e03" />
    </button>
  );
};

export default FloatingMenu;
