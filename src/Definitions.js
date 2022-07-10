import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="definitions">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <div className="example">{definitions.example}</div>
          </div>
        );
      })}
    </div>
  );
}
