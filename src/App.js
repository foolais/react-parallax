import ParallaxImage from "./components/ParallaxImage";
import TextBox from "./components/TextBox";
import Jakarta from "./images/jakarta.jpg";
import Bromo from "./images/bromo.jpg";

function App() {
  return (
    <>
      <ParallaxImage images={Jakarta} text="Jakarta" />
      <TextBox />
      <ParallaxImage images={Bromo} text="Bromo" />
    </>
  );
}

export default App;
