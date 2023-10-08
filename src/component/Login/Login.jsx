import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    userSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div data-aos="fade-right">
        <h2 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Login
        </h2>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        onSubmit={handleLogin}
        data-aos="fade-left"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center pb-3 px-3 md:pb-6 md:px-6">
        Do not have an account? please{" "}
        <Link className="font-bold text-blue-800 underline" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
