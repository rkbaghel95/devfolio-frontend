import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold">
        DevFolio CMS
      </h1>

      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;