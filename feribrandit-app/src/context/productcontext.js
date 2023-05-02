import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const MyContext = createContext();

const API = "https://feribrand-backend-production.up.railway.app/";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error){
           dispatch ({ type:"API_ERROR "});
        }
        
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <MyContext.Provider value={{ ...state }}>
            {children}

        </MyContext.Provider>
    );
}
//custom hooks

const useProductContext = () => {
    return useContext(MyContext);
}


export { AppProvider, MyContext, useProductContext };