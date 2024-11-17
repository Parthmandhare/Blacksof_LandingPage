import Features from "./Components/Features";
import Footbar from "./Components/Footbar";
import Hero from "./Components/Hero";
import { Hero1 } from "./Components/Hero1";
import Navbar from "./Components/Navbar";
import { Products } from "./Components/Products";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Hero1/>
      <Products/>
      <Features/>
      <Footbar/>
    </>
  );
}

export default App;
