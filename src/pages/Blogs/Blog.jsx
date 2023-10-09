import Navbar from "../Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="tracking-widest font-bold text-3xl italic text-center my-2 lg:my-8 ">
        BLOG
      </h2>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
