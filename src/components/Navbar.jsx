import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="flex p-10 text-amber-950">
        <h1 className="flex-1">
          <Link to="/" className="logo text-black">
            Meal Magic
          </Link>
        </h1>

        <div className="flex-1 hidden min-[700px]:flex justify-around font-semibold">
          <Link to="/random" className="text-cyan-900 hover:text-sky-950">
            Random Meal
          </Link>
          <Link to="/categories" className="text-cyan-900 hover:text-sky-950">
            Categories
          </Link>
          <Link to="/locations" className="text-cyan-900 hover:text-sky-950">
            Locations
          </Link>
        </div>
      </nav>

      <div className="min-[700px]:hidden fixed right-5 top-12">
        <button onClick={toggleNavBar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className=" w-full mt-8  p-5 flex flex-col justify-center items-center gap-3 lg:hidden">
          <Link
            to="/random"
            className="text-cyan-900 hover:text-sky-950 hover:underline"
          >
            Random Meal
          </Link>
          <Link
            to="/categories"
            className="text-cyan-900 hover:text-sky-950 py-3 hover:underline"
          >
            Categories
          </Link>
          <Link
            to="/locations"
            className="text-cyan-900 hover:text-sky-950 py-3 hover:underline"
          >
            Locations
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
