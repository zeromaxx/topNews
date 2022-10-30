import React, { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollTop = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const scrollLink = useRef("");

  const handleScroll = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 100) {
      setScrolled(true);
      scrollLink.current.classList.add("show-link");
    } else {
      setScrolled(false);
      scrollLink.current.classList.remove("show-link");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0 })}
      ref={scrollLink}
      className="scroll-link top-link"
    >
      <AiOutlineArrowUp />
    </button>
  );
};
export default ScrollTop;
