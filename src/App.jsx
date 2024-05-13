import { Outlet } from "react-router-dom";
import CoffeeMenu from "./components/CoffeeMenu";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className=" w-full h-full bg-background relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
