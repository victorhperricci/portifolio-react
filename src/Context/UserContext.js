import React, { useState } from "react";

export const UserStorage = React.createContext();

const UserContext = (props) => {
  const [menuHamburguerOpen, setMenuHamburguerOpen] = useState(false);

  const animationRoutes = {
    mostrar: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    esconder: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 3,
      },
    },
    inicial: {
      y: "-100%",
      opacity: 0,
    },
  };

  return (
    <UserStorage.Provider
      value={{ animationRoutes, menuHamburguerOpen, setMenuHamburguerOpen }}
    >
      {props.children}
    </UserStorage.Provider>
  );
};

export default UserContext;
