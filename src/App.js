import "./App.css";
import Work from "./Work.js";

export default function App() {
  return (
    <div className="container">
      <h1>yo pls work</h1>
      <h2>ok pls continue to work</h2>
      <Work />
      <div>
        <p>
          This projected was created by{" "}
          <a href="https://github.com/hirosmaster">Rica Andrea Soriano</a> and
          is open sourced on{" "}
          <a href="https://github.com/hirosmaster/boop-weather-react">Github</a>{" "}
          and is hosted on <a href="boopyweather.netlify.app">Netlify.</a>
        </p>
        <btn btn-primary>YO WASSUP</btn>
      </div>
    </div>
  );
}
