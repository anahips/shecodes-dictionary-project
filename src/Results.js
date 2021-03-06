import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <section>
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definitions meaning={meaning} />
              <Synonyms synonyms={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
