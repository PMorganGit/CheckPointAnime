import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/all-categorie`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="all_categories">
      <div className="categorie_title">

      <h2>Catégories</h2>
      </div>
      <div className="card_categorie_container">
        <ul className="card_categorie">
          {categories.map((category) => (
            <li
              key={category.ID}
              className={`h3-${category.Genre.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Utiliser Link pour créer un lien vers /genre */}
              <Link to={`/categories/${category.Genre.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3>{category.Genre}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
