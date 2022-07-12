import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Pictures from "./Pictures";
import "./SearchForm.css";

export default function SearchForm(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [pictures, setPictures] = useState("");

  function handleDictionaryResponse(event) {
    setResults(event.data[0]);
  }

  function handlePexelsResponse(event) {
    setPictures(event.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `563492ad6f91700001000001c478c7d23a344197bd2ec291d6fad166`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
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
        <Pictures photos={pictures} />
      </div>
    );
  } else {
    load();
  }
}
