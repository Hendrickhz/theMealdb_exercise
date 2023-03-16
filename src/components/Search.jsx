import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { name } = useParams();
  const [meal, setMeal] = useState({});
  const fetchData = async () => {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let { meals } = await api.json();
    setMeal(meals[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(meal);
  //? ingredient start
  const [Ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const ingres = [
      { id: 1, name: meal.strIngredient1 },
      { id: 2, name: meal.strIngredient2 },
      { id: 3, name: meal.strIngredient3 },
      { id: 4, name: meal.strIngredient4 },
      { id: 5, name: meal.strIngredient5 },
      { id: 6, name: meal.strIngredient6 },
      { id: 7, name: meal.strIngredient7 },
    ];
    setIngredients(ingres);
  }, [meal]);

  //? ingredient end

  //? ingredient and instruction button function start
  const [showPara, setShowPara] = useState(true);
  const [showList, setShowList] = useState(false);

  const handleParaClick = () => {
    setShowPara(true);
    setShowList(false);
  };
  const handlerListClick = () => {
    setShowPara(false);
    setShowList(true);
  };

  return (
    <div className=" mb-5 md:mt-0 mt-5 flex items-center justify-center h-auto m-auto w-[90%] md:h-[75vh]">
      <div className="flex md:flex-nowrap flex-wrap  md:items-center  ">
        <div className="h-[90%] mx-auto  w-full md:w-[50%] md:mr-10 mr-0 ">
          <img
            className="border border-stone-600 rounded mx-auto  md:h-[500px] md:w-[500px] w-[300px] h-[300px] "
            src={meal.strMealThumb}
            alt=""
          />
        </div>
        <div className="mt-5 md:mt-0 w-full md:w-[700px] ">
          <h2 className=" mb-2 leading-10 tracking-wide text-3xl font-semibold text-gray-600">
            {meal.strMeal}
          </h2>
          <h3 className="mb-2  tracking-wide text-xl font-semibold text-gray-600">
            Category: {meal.strCategory}
          </h3>
          <h3 className=" tracking-wide text-xl font-semibold text-gray-600">
            Area: {meal.strArea}
          </h3>
          <div className=" flex my-4 ">
            <button
              onClick={handleParaClick}
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-5"
            >
              Category
            </button>
            <button
              onClick={handlerListClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"
            >
              Ingredients
            </button>
          </div>
          <div className="h-full overflow-hidden flex justify-start md:items-center w-full ">
            {showPara && (
              <p className=" md:mt-4 mt-0 text-gray-500 overflow-auto text-justify tracking-wide h-[200px]">
                {meal.strInstructions}
              </p>
            )}

            {showList && (
              <ul className="md:mt-4 mt-0 h-[200px] overflow-auto leading-7  text-gray-600 ">
                {Ingredients.map((ingre) => {
                  return (
                    <li key={ingre.id} className="">
                      {ingre.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
