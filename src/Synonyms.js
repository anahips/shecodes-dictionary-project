import React from "react";

export default function Synonyms(props) {
  return (
    <div className="synonyms">
      {props.synonyms.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <p>{synonym}</p>
          </div>
        );
      })}
    </div>
  );
}
