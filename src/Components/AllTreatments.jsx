import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="w-[90%] mx-auto grid grid-cols-4 gap-6 my-8">
      {services.map((services) => (
        <ServiceCard key={services.id} services={services}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatments;
