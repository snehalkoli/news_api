import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";
//context creation
//provider
//consumer lengthy remove useContext hook
//useContext hook

const initialstate = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: []
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // const[state,setState]= useState("initial state");
  const [state, dispatch] = useReducer(reducer, initialstate);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        }
      });
      // isLoading=false;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query} &page=${state.page}`);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
