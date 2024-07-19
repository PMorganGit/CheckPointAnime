import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../NavBar/Nav";
import "./Details.css";
import "./Background.css";

function Details() {
  const location = useLocation();
  const {
    CategoryId,
    CategoryName,
    CategoryAltName,
    Episodes,
    Genres,
    Synopsis,
    Picture,
    Background,
    Rank,
    Season,
  } = location.state || {};

  // Générer dynamiquement la classe basée sur le nom de l'animé
  const backgroundClassName = `all_details_background_${CategoryName.replace(/\s+/g, "_").replace(/!|:|,/g, "").toLowerCase()}`;

  return (
    <div className={backgroundClassName}>
      <div>
        <Nav />
      </div>
      <div className="all_details_info">
        <div className="details_title">
          <h1 className="details_title">{CategoryName}</h1>
        </div>
        <div className="image_info_details">
          <div className="details_picture">
            <img src={Picture} alt={CategoryName} />
          </div>
          <div className="details_info_p">
            <p>Nom Alternatif: {CategoryAltName}</p>
            <p>Nombre d'épisodes: {Episodes}</p>
            <p>Genres: {Genres}</p>
            {Season && <p>Saison: {Season}</p>}
          </div>
        </div>
        <div className="all_synopsis">
          <h3 className="details_title_h3">Synopsis </h3>
          <div className="details_synopsis">
            <p> {Synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
