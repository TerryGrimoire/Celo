import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

function Services({ helmet }) {
  const [pizzas, setPizzas] = useState([]);
  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 3) {
        data[9].forEach((key, j) => {
          if (
            line[j] !== "Description" &&
            line[j] !== "Type" &&
            line[j] !== "id" &&
            line[j] !== "Nom" &&
            line[j] !== "prix"
          ) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("pizzas", JSON.stringify([...new Set(json)]));
    setPizzas(
      JSON.parse(sessionStorage.getItem("pizzas")).filter(
        (el, index) => index > 0
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(import.meta.env.VITE_DATA)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);
  return (
    <div className="menu">
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section>
        <h1>Notre carte</h1>

        <div>
          <p className="dispo">
            {pizzas !== null &&
            pizzas.filter((el) => el.Nom !== "Nom").length > 0 ? (
              <>
                {pizzas.filter((el) => el.Nom !== "Nom").length} résultats
                disponibles
              </>
            ) : (
              <p>chargement de la carte</p>
            )}
          </p>
          <div>
            {pizzas !== null &&
              pizzas
                .filter((el) => el.Nom !== "Nom")
                .map((pizza) => (
                  <div className="plats" key={pizza.Nom}>
                    <div>
                      <h3>{pizza.Nom}</h3>
                      <h4>{pizza.prix}</h4>
                    </div>
                    <p>{pizza.Description}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
