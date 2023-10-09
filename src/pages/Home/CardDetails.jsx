import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const cardData = data?.find((card) => card.id === idInt);
  console.log(cardData);

  return (
    <div>
      <Navbar></Navbar>
      <div className="card card-compact ">
        <figure className="rounded rounded-tl-full rounded-br-full max-h-[580px] mt-3 lg:mt-8">
          <img src={cardData.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardData.name}</h2>
          <p>{cardData.short_description}</p>

          <p className="text-gray-700 font-medium my-1">
            Price: {cardData.price}
          </p>

          <div className="card-actions ">
            <button className="btn btn-primary">
              {cardData.purchase_button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
