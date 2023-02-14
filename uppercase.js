import React, { useState } from "react";
import '../App';

function BioForm() {
  const [bio, setBio] = useState("");
  const [bioUpperCase, setBioUpperCase] = useState("");

  function convertToUppercase() {
    setBioUpperCase(bio.toUpperCase());
  }

  function handleBioChange(event) {
    setBio(event.target.value);
  }

  return (
    <div className="area">
      <h1>convert content into uppercase</h1>
      <textarea
        value={bio}
        onChange={handleBioChange}
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <button onClick={convertToUppercase}>Convert to Uppercase</button>
      <br />
      <p>{bioUpperCase}</p>
    </div>
  );
}

export default BioForm;
