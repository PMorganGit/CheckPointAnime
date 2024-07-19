import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Fantasy/Fantasy.css";

function Global() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/global`
        );

        // Tri des catégories selon le Rang dans l'ordre souhaité (2ème, 1er, 3ème)
        const sortedCategories = response.data.sort((a, b) => {
          if (a.Rang === "2ème") return -1; // 2ème en premier
          if (b.Rang === "2ème") return 1;
          if (a.Rang === "1er") return -1; // 1er ensuite
          if (b.Rang === "1er") return 1;
          return 0; // Le reste conserve l'ordre d'origine
        });

        setCategories(sortedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="all_all_global_category">
      <div className="title_synopsis_container">
        <div className="title_synopsis_category">
          <h1>Global</h1>
          <p>
            Voici une catégorie concernant les animés que j'ai le plus
            appréciée.
          </p>
        </div>
      </div>
      <div className="all_anime_info">
        {categories.map((category, index) => (
          <div
            key={category.ID}
            className={`info_picture_anime ${
              index === 0
                ? "first_category"
                : index === 1
                  ? "second_category"
                  : "third_category"
            }`}
            onClick={() => {
              navigate("/details", {
                state: {
                  CategoryId: category.ID,
                  CategoryName: category.Nom,
                  CategoryAltName: category.Nom_alternatif,
                  Episodes: category.Nombre_episodes,
                  Genres: category.Genres,
                  Synopsis: category.Synopsis,
                  Picture: category.Picture,
                  Background: category.Background,
                  Rank: category.Rang,
                  Season: category.Saison,
                },
              });
            }}
          >
            <p>{category.Rang}</p>
            <img src={category.Picture} alt={category.Nom} />
            <p>{category.Nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Global;
