import React, { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";

const About = () => {
  const { setMenu } = useContext(StateContext);
  useEffect(() => {
    setMenu(false);
  }, []);
  const members = [
    {
      id: 1,
      name: "Avah Mendoza",
      img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
    },
    {
      id: 2,
      name: "Tucker Pitts",
      img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80",
    },
    {
      id: 3,
      name: "Shawn Hebert",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Kamila Velasquez",
      img: "https://images.unsplash.com/photo-1612649649954-9facbd23be24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      name: "Justus Vincent",
      img: "https://images.unsplash.com/photo-1613064756072-52b429a1e06f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ];
  return (
    <div className="about-container container w-[90%] mx-auto">
      <h1 className=" text-center my-5 font-semibold text-3xl">About Us</h1>
      <div className="text-container  w-[90%] lg:w-[50%]  mx-auto bg-amber-600 p-7 rounded-md text-white tracking-wide">
        <div className=" my-3 ">
          <h2 className=" text-2xl">Meet our team</h2>
          <h2 className=" text-2xl">
            <i>What makes us different?</i>
          </h2>
        </div>
        <p className=" text-justify md:leading-8  leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque
          vitae modi, aperiam necessitatibus nulla enim vel incidunt adipisci.
          Est, eveniet ea commodi necessitatibus id quos rerum nostrum pariatur
          dolores cum praesentium dolorum iste saepe quasi natus voluptatem,
          velit eaque.
        </p>
        <p className=" text-justify md:leading-8  leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          suscipit qui ea quaerat modi quis? Similique earum ab accusantium sit!
        </p>
      </div>
      <div className="team-container my-9">
        <h1 className=" text-amber-500 font-semibold text-3xl text-center py-8">
          Our People
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {members.map((member) => {
            return (
              <div key={member.id}>
                <img
                  className="w-[200px] h-[200px] object-cover object-center rounded-full"
                  src={member.img}
                  alt=""
                />
                <h5 className=" mt-1 font-semibold text-gray-600 text-center">
                  {member.name}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
