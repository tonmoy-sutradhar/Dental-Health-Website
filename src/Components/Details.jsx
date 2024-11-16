import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const { id, treatment, image, description, cost } = singleData;

  return (
    <>
      <div
        className="hero w-[90%] mx-auto min-h-screen mt-8 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
