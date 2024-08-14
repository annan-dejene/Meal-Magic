import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-10 text-amber-950">
      <h1 className="flex-1">
        <Link to="/" className="logo text-black">
          Meal Magic
        </Link>
      </h1>

      <div className="flex-1 flex justify-around font-semibold">
        <a href="/random" className="text-cyan-900 hover:text-sky-950">
          Random Meal
        </a>
        <Link to="/categories" className="text-cyan-900 hover:text-sky-950">
          Categories
        </Link>
        <Link to="/locations" className="text-cyan-900 hover:text-sky-950">
          Locations
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
