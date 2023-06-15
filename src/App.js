import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end fpf intro */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
