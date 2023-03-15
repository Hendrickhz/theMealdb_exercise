import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ meal }) => {
  return (
    <div className=" w-[250px] mb-4 ">
      <div className="relative parent">
        <img
          className=" w-full  border border-stone-600 rounded-md"
          src={meal.strMealThumb}
          alt=""
        />
        <Link to={`/detail/${meal.idMeal}`}>
          <p className="icon text-2xl text-gray-600 bg-gray-300 bg-opacity-75 p-[10px] rounded-full absolute top-[42%] left-[42%] ">
            <FaEye />
          </p>
        </Link>
      </div>
      <p className=" mt-[5px] text-center text-base font-semibold ">
        {meal.strMeal}
      </p>
    </div>
  );
};

export default Card;
