import { Link } from "react-router-dom";
import { locations, locationsImages } from "../utils/locationsImagesInfo";

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold mb-10">
        Locations
      </h1>

      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {locations.map((location, index) => (
          <Link to={`/locations/${location}`} key={index}>
            <div className="h-min md:w-full my-5 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 ">
              <img
                src={locationsImages[index]}
                alt={location}
                className="mx-auto rounded-md hover:blur-[2px] group-hover:opacity-90"
              />
            </div>

            <h2 className="text-lime-900 text-center text-sm sm:text-lg">
              {location}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Locations;
