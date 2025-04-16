import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeCard = ({ image, title, time }) => {
  return (
    <div className="bg-white h-100 rounded border shadow-sm overflow-hidden">
      <div className="position-relative">
        <img
          src={image}
          alt={title}
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="p-3">
        <h3
          className="mb-2 text-dark"
          style={{
            fontSize: "16px",
            fontWeight: "500",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.3",
          }}
        >
          {title}
        </h3>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-pink" style={{ fontSize: "14px", color: "#FF4E8C" }}>
            {time} minutes
          </span>
          <img src="/src/img/Icon Button 73.png" alt="" />
        </div>
      </div>
    </div>
  );
};

const SummerRecipes = () => {
  const recipes = [
    {
      image: "/src/img/summer1.png",
      title: "Italian-style tomato salad",
      time: "14",
      link: "/recipe/italian-style",
    },
    {
      image: "/src/img/summer2.png",
      title: "Spaghetti with vegetables and shrimp",
      time: "15",
      link: "/recipe/spaghetti",
    },
    {
      image: "/src/img/summer3.png",
      title: "Lotus delight salad",
      time: "20",
      link: "/recipe/lotus",
    },
    {
      image: "/src/img/summer4.png",
      title: "Snack cakes",
      time: "21",
      link: "/recipe/snack",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-pink mb-2 fw-bold" style={{color:"#FF4E8C"}}>
            This Summer Recipes
          </h2>
          <p className="text-muted mx-auto" style={{ fontSize: "15px", maxWidth: "450px" }}>
            We have all your Independence Day sweets covered.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <Link to={recipe.link} className="text-decoration-none">
                <RecipeCard {...recipe} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerRecipes;
