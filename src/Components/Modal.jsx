const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const fname = e.target.fname.value;
    console.log(e);
  };
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-black">
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input
                type="text"
                name="fname"
                className="grow"
                placeholder="First Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input
                type="text"
                name="lname"
                className="grow"
                placeholder="Last Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input
                type="text"
                name="phone"
                className="grow"
                placeholder="Phone Number"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-2">
              Appointment date
              <input
                name="date"
                type="date"
                className="grow"
                placeholder=" AppointmentDate"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input
                type="text"
                name="address"
                className="grow"
                placeholder="Address"
              />
            </label>
            <div className="flex items-center justify-center">
              <div className="mt-6 mr-3">
                <button className="btn btn-primary " type="submit">
                  Book Appointment
                </button>
              </div>
              <div className="modal-action items-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-warning">Close</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
