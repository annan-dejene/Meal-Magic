import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getMealIngredientDetails,
  instructionsExtract,
} from "../utils/getMealInfo";
import Spinner from "../components/Spinner";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return; // Prevents multiple fetches
    hasFetched.current = true;

    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const fetchMeal = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const meal = data.meals[0];
        setMeal(meal);
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };

    fetchMeal();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      {meal ? (
        <div>
          <h1
            className={
              "text-center text-red-900 mb-5 " +
              (meal.strMeal.length > 40
                ? "lg:text-5xl sm:text-4xl text-3xl"
                : "lg:text-6xl sm:text-5xl text-4xl")
            }
          >
            {meal.strMeal}
          </h1>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="max-w-56 max-h-64 mx-auto my-4 rounded-md shadow-lg"
          />
          <p className="text-center text-neutral-700 text-sm">
            {meal.strArea} origin,{" "}
            <Link
              to={`/categories/${meal.strCategory}`}
              className="hover:underline"
            >
              {meal.strCategory}
            </Link>{" "}
            category
          </p>

          <div className="grid min-[700px]:grid-cols-2 mt-10">
            <ul className="list-square mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl underline py-6">
                Ingridient Details
              </h1>
              {getMealIngredientDetails(meal).map((ingridient, index) => (
                <li key={index} className="py-1">
                  {ingridient}
                </li>
              ))}
            </ul>

            <ol className="list-roman">
              <h1 className="text-2xl sm:text-3xl md:text-4xl underline py-6 max-[700px]:text-center">
                Instructions
              </h1>
              {instructionsExtract(meal).map((instruction, index) => (
                <li key={index} className="py-1">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {meal.strSource ? (
            meal.strSource.length ? (
              <div className="text-center mt-4">
                <a
                  href={meal.strSource}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline"
                >
                  View Full Recipe
                </a>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default RandomMeal;
