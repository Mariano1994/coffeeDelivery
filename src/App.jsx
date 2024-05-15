import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CoffeeCartConextProvider } from "./contexts/CoffeeCartConext";

const App = () => {
  return (
    <CoffeeCartConextProvider>
      <div className=" w-full h-full bg-background relative">
        <Header />
        <Outlet />
      </div>
    </CoffeeCartConextProvider>
  );
};

export default App;
