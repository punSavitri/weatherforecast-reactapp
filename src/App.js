import "./App.css";
import Footer from "./components/footer/Footer";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <Footer />
    </div>
  );
}

export default App;
