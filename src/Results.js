import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <h2>{props.result[0].word}</h2>
        {props.result[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definitions meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
