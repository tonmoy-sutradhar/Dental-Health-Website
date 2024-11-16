import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
  const singleData = useLoaderData();
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
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary"
            >
              Book Appointment
            </button>
            <Modal></Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
