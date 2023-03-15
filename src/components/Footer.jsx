import React from "react";

const Footer = () => {
  return (
    <div className="  bg-slate-100 bg-opacity-20">
      <div className=" lg:w-[80%] mx-auto">
        <div className="footer-items flex  justify-between p-5 flex-wrap md:flex-nowrap ">
          <div className="footer-item mb-5 md:mb-0">
            <h1 className=" font-semibold mb-5">The Meal</h1>

            <p className=" text-amber-500 tracking-wide underline py-1">Blog</p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Recipes
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Hero Discounts
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Delivery Options
            </p>
          </div>
          <div className="footer-item">
            <h1 className=" font-semibold mb-5">Our company</h1>

            <p className=" text-amber-500 tracking-wide underline py-1">
              TheMeal Group{" "}
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Sustainability{" "}
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Careers
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Press
            </p>
          </div>
          <div className="footer-item">
            <h1 className=" font-semibold mb-5">Work with us</h1>

            <p className=" text-amber-500 tracking-wide underline py-1">
              Partner{" "}
            </p>

            <p className=" text-amber-500 tracking-wide underline py-1">
              Influencers
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Affiliates
            </p>
          </div>
          <div className="footer-item">
            <h1 className=" font-semibold mb-5">Contact us</h1>

            <p className=" text-amber-500 tracking-wide underline py-1">
              Help Center & FAQ{" "}
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Partnership Inquiries
            </p>
            <p className=" text-amber-500 tracking-wide underline py-1">
              Corporate Sales
            </p>
          </div>
        </div>
        <hr />
        <p className=" text-center py-3"> copyright @theMeal 2023</p>
      </div>
    </div>
  );
};

export default Footer;
