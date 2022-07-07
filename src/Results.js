import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="results">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
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
