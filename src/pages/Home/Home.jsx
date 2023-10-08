import { useLoaderData } from "react-router-dom";
import Header from "../../component/Header/Header";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div>
        <div>
          <h2 className="text-center mt-3 md:mt-6 mb-2 text-3xl md:text-4xl font-semibold">
            Our Services
          </h2>
          <p className="text-center mb-3 md:mb-6">
            Turning Visions into Reality, One Service at a Time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          {data?.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
