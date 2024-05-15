import { createContext } from "react";

const CoffeeCartConext = createContext();

const CoffeeCartConextProvider = ({ children }) => {
  return <CoffeeCartConext.Provider>{children}</CoffeeCartConext.Provider>;
};

export { CoffeeCartConext, CoffeeCartConextProvider };
