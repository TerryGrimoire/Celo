import React, { useState, useEffect } from "react";
import papa from "papaparse";

function Defilant() {
  const [message, setMessage] = useState("Retrouvez-nous sur barket.re ! ");

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;

  const prepareData2 = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 0) {
        data2[0].forEach((key, j) => {
          if (line[j] !== "" && key !== "" && key) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    if (
      json[0].Message &&
      parseInt(json[0].Debut, 10) <= parseInt(today, 10) &&
      parseInt(json[0].Fin, 10) >= parseInt(today, 10)
    ) {
      setMessage(json[0].Message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(import.meta.env.VITE_GOOGLE_MESSAGE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  return (
    <div className="messagedefilant">
      <div data-text={message}>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Defilant;
