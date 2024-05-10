import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className=" bg-background h-screen w-screen">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;
