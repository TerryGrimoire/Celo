import React from "react";
import background from "../../../assets/background.mp4";
import halal from "../../../assets/halal.png";

function Image({ title }) {
  /* Pour utiliser ce composant, suivre les étapes suivantes :

    1/ Remplacer background.png par l'image souhaitée dans Assets
    2/ Remplir landingData
    3/ Importer Image dans le composant souhaitée

    Depuis n'importe quelle page, on peut importer Image de la façon suivante :

    import Image from "../components/Home/LandingPage/Image"
    <Image title={helmet.title} />

  */

  const landingData = {
    h2: "Une cuisine traditionnelle créole et Halal",
    alt: "cari poulet",
  };
  return (
    <div className="landing_page container">
      <h1>{title}</h1>
      <h2>{landingData.h2}</h2>
      <video autoPlay muted loop className="background_img">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={halal} alt="label halal Réunion" className="halal" />
      <div className="veil" />
    </div>
  );
}

export default Image;
