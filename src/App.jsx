import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CoffeeCartConextProvider } from "./contexts/CoffeeCartConext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <CoffeeCartConextProvider>
      <Toaster richColors />
      <div className=" w-full h-full bg-background">
        <Header />
        <Outlet />
      </div>
    </CoffeeCartConextProvider>
  );
};

export default App;
