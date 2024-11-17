import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-300  px-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allTreatments"> All Treatments</NavLink>
            <NavLink to="/myAppointments"> My appointments</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/about"> About</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dental Health Website</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3  font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allTreatments"> All Treatments</NavLink>
          <NavLink to="/myAppointments"> My appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/about"> About</NavLink>
        </ul>
      </div>
      <div className="navbar-end ">
        <NavLink to="/login">
          <button className="btn btn-primary font-bold">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
