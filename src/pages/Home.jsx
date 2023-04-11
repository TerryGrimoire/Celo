import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import Image from "../components/Home/LandingPage/Image";

import tel from "../assets/tel.png";
import loc from "../assets/loc.png";
import cal from "../assets/cal.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 1) {
        data[9].forEach((key, j) => {
          if (line[j] !== "" && line[j] !== "PIZZAS") {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("pizzas", JSON.stringify([...new Set(json)]));
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_DATA)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Image title={helmet.title} />
      <section className="articles_container">
        <article>
          <h2>Restaurant et traiteur halal</h2>
          <p>
            Bienvenue à la table de Celo ! Nous sommes fiers de vous offrir une
            expérience culinaire unique au bon goût et saveurs de La Réunion.
            Nos rougails et caris sont cuisinés sur place avec passion et amour
            dans le respect des normes alimentaires halal. En plus de notre
            restaurant, nous offrons également un service traiteur pour vos
            événements spéciaux. Que ce soit pour un mariage, un anniversaire ou
            une fête d'entreprise, nous sommes là pour satisfaire vos papilles
            gustatives.
          </p>
        </article>
        <article>
          <h2>Notre tradition dans vos assiettes </h2>
          <p>
            Parce que nous attachons une importance capitale à notre héritage
            culinaire, nous cuisinons chacun de nos plats en suivant les
            recettes familiales transmises de génération en génération. Nous
            n'utilisons aucun produit ou aliment transformé, nous suivons les
            règles d'higiène avec une rigueur irréprochable. Le moins qu'on
            puisse dire, c'est qu'à la table de Celo on y mange bien, on y mange
            sain.
          </p>
        </article>
      </section>
      <section>
        <div>
          <h2>Nous contacter</h2>
          <div className="locaux">
            <p>
              <img src={loc} alt="icone pour localisation" />
              <span className="gras">
                39 bis Léon Lepervanche, 97420, Le Port, La Réunion
              </span>
            </p>
            <p>
              <img src={tel} alt="icone pour téléphone" />
              <span className="gras">
                Contactez nous directement au{" "}
                <a href="tel:+262692926601">0692926601</a>
              </span>
            </p>
            <p>
              <img src={cal} alt="icone représantant un calendrier" />
              <span className="gras">
                Ouvert du mardi au dimanche. Fermé le lundi.
              </span>
            </p>
          </div>
          <ul>
            <li>Lundi : Fermé</li>
            <li>Mardi : 11h-13h30 | 18h-22h</li>
            <li>Mercredi : 11h-13h30 | 18h-22h</li>
            <li>Jeudi : 11h-13h30 | 18h-22h</li>
            <li>Vendredi : 11h-13h30 | 18h-22h</li>
            <li>Samedi : 18h-22h</li>
            <li>Dimanche :18h-22h</li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.0745646142047!2d55.45360514743608!3d-20.8829594607785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f06fb2d8581%3A0x24bcf04f3459092f!2s94%20Rue%20Sainte-Marie%2C%20Saint-Denis%2097400%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1675499040432!5m2!1sfr!2sfr"
          title="google maps"
        />
      </section>
    </main>
  );
}
