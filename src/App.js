import "./App.css";
import Footer from "./components/footer/Footer";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 pt-3">Weather Forecast App</h1>
      <Weather defaultCity="Paris" />
      <Footer />
    </div>
  );
}

export default App;
