import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";

const Home = () => {
  const services = useLoaderData();
  const { serviceData, feedBackData } = services;

  return (
    <div>
      <Banner></Banner>

      <div className="w-[90%] mx-auto grid grid-cols-4 gap-6 my-8">
        {serviceData.slice(0, 4).map((services) => (
          <ServiceCard key={services.id} services={services}></ServiceCard>
        ))}
      </div>

      <div className="text-center">
        <Link to="/allTreatments" className="btn btn-primary">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Home;
