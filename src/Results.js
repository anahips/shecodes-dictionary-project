import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <h2>{props.result[0].word}</h2>
        {props.result[0].meanings.map(function (meaning, index) {
          console.log(meaning);
          return <Definitions meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
