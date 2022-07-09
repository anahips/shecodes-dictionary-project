import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function SearchForm() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(event) {
    setResults(event.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function lookForWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="searchForm">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a word you want to search"
            onChange={lookForWord}
          />
        </form>
      </section>
      <Results result={results} />
    </div>
  );
}
