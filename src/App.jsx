import CoffeeMenu from "./components/CoffeeMenu";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className=" w-full h-full bg-background">
      <div className=" bg-background h-screen w-screen">
        <Header />
        <Home />
      </div>
      <CoffeeMenu />
    </div>
  );
};

export default App;
