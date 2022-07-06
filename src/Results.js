import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definitions meaning={meaning} />
              <Synonyms synonyms={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
