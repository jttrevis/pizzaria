import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          style={{
            color: "gold",
            position: "fixed",
            bottom: 6,
            right: 5,
            background: "transparent",
          }}
        >
          <BsFillArrowUpCircleFill size={45} color={"white"} />
        </button>
      )}
    </div>
  );
};
