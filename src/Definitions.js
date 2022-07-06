import React from "react";

export default function Definitions(props) {
  console.log(props.meaning);
  return (
    <div className="definitions">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>{definitions.definition}</p>
            <p>
              <em>{definitions.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
