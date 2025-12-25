function Button2({ text, onClick, }) {
  return (
    <button
      onClick={onClick}
      className={`
        active:scale-105 
        lg:active:scale-100
        relative z-0 inline-block overflow-hidden rounded-full
        border-2 border-lime-300
        bg-transparent
        px-8 py-3
        text-base font-bold text-lime-300
        transition-all duration-200 ease-in-out

        after:absolute after:inset-0
        after:z-[-1]
        after:rounded-full
        after:bg-green-900
        after:content-['']
        after:origin-top-left
        after:-translate-x-full
        after:rotate-10
        after:transition-all
        after:duration-300
        after:ease-out

        hover:after:translate-x-0
        hover:after:rotate-0
        
        max-md:px-6 max-md:py-2.5
      `}
    >
      {text}
    </button>
  );
}

export default Button2;
