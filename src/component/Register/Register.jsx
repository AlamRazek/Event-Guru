import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    // const form = new FormData(e.currentTarget);
    // const email = form.get("email");
    // const password = form.get("password");
    // console.log(email, password);

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div data-aos="fade-down">
        <h2 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Register
        </h2>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        onSubmit={handleRegister}
        data-aos="fade-up"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center pb-3 px-3 md:pb-6 md:px-6">
        Already have an account? please
        <Link className="font-bold text-blue-800 underline" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;