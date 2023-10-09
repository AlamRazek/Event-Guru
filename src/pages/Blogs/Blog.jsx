import Footer from "../../component/Footer/Footer";

const Blog = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div className="p-4">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="max-w-xl max-h-96">
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
