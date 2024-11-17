import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { handleRegister, manageProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // const Cpassword = form.get("Cpassword");
    // if (password !== Cpassword) {
    //   setError("Password didn't match");
    // }
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      setError({
        ...error,
        password:
          password.length < 8
            ? "Password must be more than 8 characters."
            : !/[A-Z]/.test(password)
            ? "Password must contain at least one uppercase letter."
            : "Password must contain at least one lowercase letter.",
      });
      return;
    }

    handleRegister(email, password).then((res) => {
      manageProfile(name, photo);
    });
    // console.log(name, email, photo, password);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Register your account
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your phot URL"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
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
            {error.password && (
              <label className="label text-sm text-red-600">
                {error.password}
              </label>
            )}
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              name="Cpassword"
              placeholder="Enter your password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div> */}
          <div className="form-control ">
            <label className="cursor-pointer label justify-start">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text ml-2 text-gray-400">
                Accept Term & Conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-active bg-blue-500 text-white rounded-none">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
