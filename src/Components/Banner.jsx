import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero bg-blue-50 w-[90%] mx-auto rounded-2xl py-4 mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Dental Health!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
