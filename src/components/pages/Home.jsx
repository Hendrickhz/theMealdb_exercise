import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../Context/StateContext";
const Home = () => {
  const [meal, setMeal] = useState({});
  const { setMenu } = useContext(StateContext);
  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const data = await api.json();
    setMeal(data.meals[0]);
  };
  useEffect(() => {
    fetchData();
    setMenu(false);
  }, []);

  //go detail by id
  const navigate = useNavigate();

  // console.log(meal)

  //show some meals
  const [meals, setMeals] = useState([]);
  const fetchMeals = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await api.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    fetchMeals();
  }, []);
  
  return (
    <div className=" ">
      <div className=" mb-20 md:mb-4 ">
        <p className=" italic mt-5  md:mt-32 text-center font-semibold text-4xl text-amber-600  ">
          Take the stress out of mealtime
        </p>
        <div className="mx-auto w-[90%]  h-[75vh] hero_section md:flex items-center md:gap-6 justify-center">
          <div className="mx-auto mt-4 md:mt-0">
            <img
              className=" border border-stone-600 rounded-md w-[600px]"
              src={meal.strMealThumb}
              alt=""
            />
          </div>
          <div className="lg:w-[800px] md:w-[400px] mx-auto">
            <h2 className=" my-5 text-gray-600 font-semibold text-4xl tracking-wide">
              {meal.strMeal}
            </h2>
            <span className=" tracking-wide bg-gray-500 text-white text-base   mr-2 px-4 py-3 rounded ">
              {meal.strCategory}
            </span>
            <span className=" tracking-wide bg-gray-500 text-white text-base  mr-2 px-4 py-3 rounded ">
              {meal.strArea}
            </span>
            <p className=" my-5 truncate text-xl font-semibold text-gray-600">
              {meal.strInstructions}
            </p>
            <button
              onClick={() => navigate(`/detail/${meal.idMeal}`)}
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-5"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="more-meals bg-amber-500 mt-5 md:mt-0 p-5 text-white">
        <h1 className=" tracking-wide my-3 text-xl font-semibold text-center">
          Over 30+ fresh recipes every week
        </h1>
        <p className=" tracking-wide my-3  text-center">
          Easy meals designed by professional chefs and nutritionists
        </p>
        <div
          className="meals=container flex gap-3 flex-wrap lg:w-[70%] mx-auto
         justify-center"
        >
          {meals.slice(0, 6).map((meal) => {
            return (
              <div className="w-[30%] lg:w-[20%] " key={meal.idMeal}>
                <img
                  className=" lg:w-[300px] "
                  src={meal.strMealThumb}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => navigate(`/products`)}
            className=" text-2xl underline   text-white font-bold py-4 px-4 rounded mr-5"
          >
            More Meals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
