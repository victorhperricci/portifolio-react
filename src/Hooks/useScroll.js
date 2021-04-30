import { useContext, useEffect, useState } from "react";
import { UserStorage } from "../Context/UserContext";

const useScroll = () => {
  const [isDown, setIsDown] = useState(false);
  const { setMenuHamburguerOpen } = useContext(UserStorage);

  let lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      // mesma posição
      if (e.scrollY === lastScrollTop) return;

      if (this.scrollY < lastScrollTop) {
        setIsDown(false);
      } else {
        setIsDown(true);
        setMenuHamburguerOpen(false);
      }

      lastScrollTop = this.scrollY;
    });
  }, []);

  return isDown;
};

export default useScroll;
