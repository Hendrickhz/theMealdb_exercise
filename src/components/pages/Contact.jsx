import React, { useContext, useEffect } from "react";

const Contact = () => {
  const { menu, setMenu } = useContext(StateContext);
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className=" md:h-[89vh] lg:w-[80%] mx-auto">
      <div className=" text-center">
        <h1 className=" py-4 tracking-wide font-semibold text-amber-600   italic text-3xl">
          Contact Us
        </h1>
        <p className=" tracking-wide text-gray-600 text-xl">
          Any questions or remarks? Just write us a message!
        </p>
      </div>

      <div className=" my-20 flex md:flex-nowrap flex-wrap md:w-[90%] w-[80%] mx-auto justify-between">
        <div className=" rounded-xl bg-amber-600 text-white md:w-[40%]  p-5">
          <h2 className="py-4 tracking-wide font-semibold text-2xl">
            Contact Information
          </h2>
          <p className=" tracking-wide mb-5 italic">
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <p className=" tracking-wide mb-5 italic">Phone : +09123 456 789</p>
          <p className=" tracking-wide mb-5 italic">
            Email : theMeal@gmail.com
          </p>
          <p className=" tracking-wide mb-5 italic">
            Address : 902 Street 17M Venue.
          </p>
        </div>
        <div className="p-4 md:w-[50%]  w-full">
          <form action="">
            <div className=" mb-5 ">
              <label className=" text-gray-600 text-xl block" htmlFor="">
                Name
              </label>
              <input
                className=" mt-2 border  outline-none py-2 px-4  w-full focus:border-amber-400"
                type="text"
                required
              />
            </div>
            <div className=" mb-5 ">
              <label className=" text-gray-600 text-xl block" htmlFor="">
                Email
              </label>
              <input
                className=" mt-2 border  outline-none py-2 px-4  w-full focus:border-amber-400"
                type="email"
                required
              />
            </div>
            <div className=" mb-5 ">
              <label className=" text-gray-600 text-xl block" htmlFor="">
                Message
              </label>
              <textarea
                className=" mt-2 border  outline-none py-2 px-4  w-full focus:border-amber-400"
                name=""
                id=""
                rows="5"
                required
              ></textarea>
            </div>
            <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-5 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
