/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NoRecipieFound from "./NoRecipieFound";

const SearchMeals = ({ searchMeal, setSearchMeal, fetchMeals, setMeals }) => {
  const [notFound, setNotFound] = useState(false);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;

  useEffect(() => {
    const fetchData = async () => {
      const meals = await fetchMeals(url);
      if (!meals.meals) {
        // Later on we will handle this error
        setNotFound(true);
        setMeals([]);
        return;
      }
      setMeals(meals.meals);
      setNotFound(false);
    };

    fetchData();
  }, [searchMeal, fetchMeals, setMeals, url]);

  const handleSearchMeal = async (e) => {
    e.preventDefault();
    // setSearchMeal(e.target.value);
  };

  return (
    <>
      <form className="w-full max-w-sm mx-auto" onSubmit={handleSearchMeal}>
        <div className="flex items-center border-b border-orange-900 py-2">
          <input
            className="appearance-none placeholder-gray-700 bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Look up a recipie"
            value={searchMeal || ""}
            onChange={(e) => setSearchMeal(e.target.value)}
            required
          />
          <button
            className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-sm border-4 text-white py-1 px-2 rounded-md shadow-sm"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {notFound && <NoRecipieFound />}
    </>
  );
};

export default SearchMeals;
