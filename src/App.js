import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contactus } from "./components/Contactus";
import { Feature } from "./components/Feature";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Feature />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
