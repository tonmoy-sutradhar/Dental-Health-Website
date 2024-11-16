const FeedBack = ({ feedBackData }) => {
  // const { review, userImg, name, reviewId } = feedBackData; ekhane kaj korbe na
  return (
    <>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-7 my-4">
        {feedBackData.map((feed, indx) => (
          <div key={indx} className="card bg-base-100 w-full shadow-xl ">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-11 h-11 rounded-full mr-3"
                    src={feed.userImg}
                    alt="img"
                  />
                  <h2 className="card-title">{feed.name}</h2>
                </div>
                <div>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <p className="text-start text-gray-500">{feed.review}</p>
              <div className="card-actions justify-end items-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeedBack;
