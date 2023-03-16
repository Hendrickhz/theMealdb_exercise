import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [menu, setMenu] = useState(false);
  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //? search meal start
  const [search, SetSearch] = useState();

  //? search meal end

  const data = { meals, setMeals, search, SetSearch, menu, setMenu };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
