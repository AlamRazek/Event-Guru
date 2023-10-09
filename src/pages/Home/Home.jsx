import { useLoaderData } from "react-router-dom";
import Header from "../../component/Header/Header";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import Footer from "../../component/Footer/Footer";

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
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure className="max-h-96 w-[80%] mx-auto rounded-sm rounded-tr-[40px] rounded-bl-[40px]">
          <img
            src="https://i.ibb.co/F787pFC/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl ">
            What we do,We do <br />
            With Passion
          </h2>
          <p>
            Our Work is our passion which we do with great care and for this we
            have a great team who are very skilled.
          </p>
        </div>
      </div>
      <div className="flex  md:flex-row justify-around my-4 lg:my-10">
        <div
          className="card card-compact w-[40%] bg-base-100 shadow-xl "
          data-aos="flip-left"
        >
          <figure>
            <img
              src="/thomas-william-OAVqa8hQvWI-unsplash (1).jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Best possible decration</p>
          </div>
        </div>
        <div
          className="card card-compact w-[40%] bg-base-100 shadow-xl "
          data-aos="flip-right"
        >
          <figure>
            <img src="/wedding-venue1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Elegant decorations for all</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
