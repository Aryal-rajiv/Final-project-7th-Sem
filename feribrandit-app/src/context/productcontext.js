import { createContext, useContext } from "react";


const MyContext = createContext();

const AppProvider = ({ children }) => {
    return (
    <MyContext.Provider value={ "feribrand" }>
        {children}
    
    </MyContext.Provider>
    );
};
//custom hooks
 const useProductContext = () => {
    return useContext(MyContext)
 };


export { AppProvider, MyContext , useProductContext };