import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
