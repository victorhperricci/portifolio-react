import { useContext, useEffect, useState } from "react";
import { UserStorage } from "../Context/UserContext";

const useScroll = () => {
  const {setMenuHamburguerVaiPraCima, menuHamburguerVaiPraCima} = useContext(UserStorage)
  const { setMenuHamburguerOpen } = useContext(UserStorage);

  let lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      // mesma posição
      if (e.scrollY === lastScrollTop) return;

      if (this.scrollY < lastScrollTop) {
        setMenuHamburguerVaiPraCima(false);
        setMenuHamburguerOpen(false);

      } else {
        setMenuHamburguerVaiPraCima(true);
        setMenuHamburguerOpen(false);
      }

      lastScrollTop = this.scrollY;
    });
  }, []);

  return menuHamburguerVaiPraCima;
};

export default useScroll;
