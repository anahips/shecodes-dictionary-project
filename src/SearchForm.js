import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./SearchForm.css";

export default function SearchForm(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(event) {
    setResults(event.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function lookForWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="searchForm">
        <section>
          <h3>What word are you looking for?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Try searching for 'puppy'"
              onChange={lookForWord}
            />
          </form>
        </section>
        <Results result={results} />
      </div>
    );
  } else {
    load();
  }
}
