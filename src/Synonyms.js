import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="synonyms">
      {props.synonyms.synonyms.map(function (synonym, index) {
        return (
          <span key={index}>
            <li>{synonym}</li>
          </span>
        );
      })}
    </div>
  );
}
