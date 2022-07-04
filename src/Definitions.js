import React from "react";

export default function Definitions(props) {
  console.log(props.meaning);
  return (
    <div className="definitions">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
    </div>
  );
}
