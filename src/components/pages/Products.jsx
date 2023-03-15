import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import { StateContext } from "../Context/StateContext";
const Products = () => {
  const { meals , SetSearch,search} = useContext(StateContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };
  
  return (
    <div className=" w-[90%] mx-auto">
      <div className=" py-6 flex justify-center">
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => {
              SetSearch(e.target.value);
            }}
            className=" border py-2 mx-2 px-3 rounded-lg  outline-none focus:border-amber-500"
            type="text"
            placeholder="search meals"
          />
          <button className=" py-2 bg-amber-500 px-4 rounded-md text-white font-semibold hover:bg-amber-700 duration-200">
            Search
          </button>
        </form>
      </div>
      <div className=" flex flex-wrap gap-3 justify-evenly ">
        {meals.map((meal) => {
          return <Card key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default Products;
