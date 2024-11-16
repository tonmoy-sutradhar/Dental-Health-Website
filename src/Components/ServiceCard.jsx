import { NavLink } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { id, treatment, image, description, cost } = services;

  return (
    <>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            className="w-full h-[270px] rounded-xl  "
            src={image}
            alt="Img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {treatment}
            <div className="badge badge-secondary">$ {cost}</div>
          </h2>
          <p className="text-start text-gray-500" title={description}>
            {description.slice(0, 100)}
            <span className="text-sm text-blue-500 cursor-pointer">
              Read more
            </span>
          </p>
          <div className="card-actions justify-end">
            <NavLink to={`/details/${id}`}>
              <button className="badge bg-blue-500 text-white p-4">
                Check out
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
