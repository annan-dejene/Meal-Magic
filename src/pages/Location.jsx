import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMeals } from "../utils/fetchMeals";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Location = () => {
  const { location } = useParams();
  const [locationMeals, setLocationMeals] = useState(null);

  useEffect(() => {
    const fetchLocationMeals = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${location}`;
      const data = await fetchMeals(url);

      setLocationMeals(data.meals);
    };

    fetchLocationMeals();
  });

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold mb-10">
        {location} Meals
      </h1>

      {!locationMeals ? (
        <Spinner className="flex flex-row min-h-screen justify-center items-center" />
      ) : (
        <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-4">
          {locationMeals.map((meal) => (
            <Link
              to={`/meals/${meal.idMeal}`}
              key={meal.idMeal}
              className="group"
            >
              <div className="h-min w-1/2 sm:w-full my-5 p-1 sm:p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 mx-auto">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className=" rounded-md hover:blur-[2px] group-hover:opacity-90"
                />
              </div>
              <h2 className="text-center text-lime-900 text-sm sm:text-lg overflow-hidden truncate w-50 group-hover:underline">
                {meal.strMeal}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;
