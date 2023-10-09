import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Blog from "./blog";
import Footer from "../../component/Footer/Footer";

const Blogs = () => {
  const bData = useLoaderData();
  console.log(bData);
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="tracking-widest font-bold text-3xl italic text-center my-2 lg:my-8 ">
        BLOG
      </h2>
      <div className="flex flex-wrap mx-auto gap-4 md:gap-10">
        {bData.map((data) => (
          <Blog key={data.id} data={data}></Blog>
        ))}
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;
