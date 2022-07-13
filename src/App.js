import SearchForm from "./SearchForm";
import background from "./balloonbg.jpg";

import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1>Dictionary</h1>
          </header>
          <SearchForm defaultWord="smile" />
          <footer>
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/ana-hipolito/">Ana Hipolito</a>{" "}
            and is{" "}
            <a href="https://github.com/anahips/shecodes-dictionary-project">
              open sourced
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
