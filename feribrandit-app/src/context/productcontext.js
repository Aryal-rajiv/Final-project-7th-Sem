import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const MyContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
    isSingleLoading: false,

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

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data; 
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error){
            dispatch({ type: "SET_SINGLE_ERROR ",});
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <MyContext.Provider value={{ ...state, getSingleProduct }}>
            {children}

        </MyContext.Provider>
    );
}
//custom hooks

const useProductContext = () => {
    return useContext(MyContext);
}


export { AppProvider, MyContext, useProductContext };
