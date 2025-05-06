import "./pages/tail.css"
import './App.css';
import { Nav } from "./pages/navBar";
import { About } from "./pages/aboutMe";
import { Habilities } from "./pages/habilities";
import { Proyecto } from "./pages/proyects";
import { Footer } from "./pages/footer";
import MobileNav from "./pages/navCel";
import ExtendAbout from "./pages/MoreAbout";

function App() {
  return (
    <div className=" bg-gradient-to-b from-white to-neutral-200 dark:from-neutral-900 dark:to-black h-fit">
      <Nav />;
      <MobileNav />;
      <div className="h-24"></div>
      <About />;
      <Habilities />
      <ExtendAbout />
      <Proyecto />
      <Footer  />
    </div>


  );
}

export default App;
