import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CardDetails = () => {
  const data = useLoaderData();

  const { id } = data;

  return (
    <div>
      <Navbar></Navbar>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vero
        porro et vel maxime odit dolores aliquid aspernatur, provident, sed
        ullam eveniet tenetur doloribus odio natus voluptatem veniam modi?
        Voluptatibus nostrum, ad ipsum iure atque eveniet delectus laborum
        maiores ut veniam quos explicabo sunt rerum? Rerum quia accusamus
        reprehenderit qui quibusdam, sit eos quos id, minima nihil, nam minus.
        Doloribus recusandae quia quisquam eius repellendus, odit accusantium
        nam nobis perferendis reiciendis quidem repellat repudiandae inventore
        sapiente laboriosam veritatis quae dignissimos.
      </h2>
      <p>{id}</p>
    </div>
  );
};

export default CardDetails;
