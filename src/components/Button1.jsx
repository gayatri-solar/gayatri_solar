function Button1({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={` 
        cursor-pointer
        text-nowrap
        active:scale-105 
        lg:active:scale-100
        relative z-0 inline-block overflow-hidden rounded-full
        border border-(--gray)
        bg-(--primary-color)
        lg:px-8 lg:py-3
        px-1 py-1
        text-base font-semibold text-(--bg-color)
        transition-all duration-200 ease-in-out

        after:absolute after:inset-0
        after:z-[-1]
        after:rounded-full
        after:bg-(--secondory-color)
        after:content-['']
        after:origin-top-left
        after:-translate-x-full
        after:rotate-10
        after:transition-all
        after:duration-300
        after:ease-out
        hover:border-(--gray)

        hover:text-(--bg-color)
        hover:after:translate-x-0
        hover:after:rotate-0

        max-md:px-3 max-md:py-1.5
                ${className}
      `}
    >
      {text}
    </button>
  );
}

export default Button1;
