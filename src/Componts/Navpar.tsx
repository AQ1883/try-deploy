import { Link } from "react-router-dom";
import "./Navbar.css";

function Navpart() {
  return (
    <header className="header">
      <a href="/" className="logo w-40">
        <img
          src="https://kartngo.co/w/wp-content/uploads/2022/01/kartngo-logo-transparent.png"
          alt=""
        />
      </a>
      <nav className="navbar font-bold">
        <Link
          to="/"
          className="text-center text-1xl transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-slate-500 hover:border-slate-800 focus:text-white focus:border-slate-800 active:text-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-center text-1xl transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-slate-500 hover:border-slate-800 focus:text-white focus:border-slate-800 active:text-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          How We Are
        </Link>
        <Link
          to="/services"
          className="text-center text-1xl transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-slate-500 hover:border-slate-800 focus:text-white focus:border-slate-800 active:text-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          What We Do
        </Link>
        <Link
          to="/contact"
          className="text-center text-1xl transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-slate-500 hover:border-slate-800 focus:text-white focus:border-slate-800 active:text-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Navpart;
