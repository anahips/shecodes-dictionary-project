import axios from "axios";
import React, { useState } from "react";

export default function SearchForm() {
  let [word, setWord] = useState("");

  function handleResponse(event) {
    console.log(event);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a word you want to search"
          onChange={lookForWord}
        />
      </form>
    </div>
  );
}
