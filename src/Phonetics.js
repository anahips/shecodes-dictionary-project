import React from "react";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Hear me
      </a>
      <p>{props.phonetics.text}</p>
    </div>
  );
}
