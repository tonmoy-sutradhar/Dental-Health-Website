import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import google from "../assets/Google.svg.png";

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogout } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    handleLogin(email, password);
  };
  // console.log(handleGoogleLogin);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Login your account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
            {/* {<label className="label text-sm text-red-600">{err}</label>} */}
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              // onClick={handleLogin}
              className="btn btn-active bg-blue-500 text-white rounded-none"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center gap-1  items-center w-[60%] border-2 border-blue-500 rounded-full  px-1">
            {/* Login with Google */}
            <img className="w-5 h-5 rounded-full" src={google} alt="img" />
            <button className="text-sm" onClick={handleGoogleLogin}>
              Login with Google
            </button>
          </div>
        </form>
        <button
          onClick={handleLogout}
          className="btn btn-active bg-orange-500 text-white rounded-none"
        >
          Logout
        </button>
        <p className="text-sm text-center text-gray-500 mt-2">
          Don’t Have An Account ?
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
