import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { name, image, price, short_description, id } = card;
  return (
    <div className="card card-compact max-h-[414px]  ">
      <figure className="rounded-3xl">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {short_description.slice(0, 100)}
          <Link to={`card/${id}`} className="text-blue-600 font-semibold">
            See More
          </Link>
        </p>
        <div className="card-actions justify-end">
          <div className="font-bold text-base text-slate-600">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
