import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Root;
