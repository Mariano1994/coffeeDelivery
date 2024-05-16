import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CoffeeCartConextProvider } from "./contexts/CoffeeCartConext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <CoffeeCartConextProvider>
      <Toaster richColors position="top-right" />
      <div className=" w-full h-full bg-background relative">
        <Header />
        <Outlet />
      </div>
    </CoffeeCartConextProvider>
  );
};

export default App;
