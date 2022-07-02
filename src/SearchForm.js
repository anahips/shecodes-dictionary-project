import React, { useState } from "react";

export default function SearchForm() {
  let [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`seraching for ${word}`);
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
