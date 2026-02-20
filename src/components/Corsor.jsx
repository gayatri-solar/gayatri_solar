import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
        
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        z-[999]
        w-3 h-3
        bg-lime-500
        rounded-full
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        ease-out
        duration-300
        lg:flex
        hidden
      "
    />
  );
};

export default Cursor;