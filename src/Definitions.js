import React from "react";

export default function Definitions(props) {
  return (
    <div className="definitions">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
