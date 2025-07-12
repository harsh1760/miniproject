import { createContext, useContext, useState } from "react";
export const BioContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");



    const handleToggleTheme =()=>{
       return setTheme((prevTheme)=>(prevTheme === "dark"? "light":"dark"));
    }
// onclick buttan event

    return (
        <BioContext.Provider value={{theme ,handleToggleTheme} }>
            {children}
        </BioContext.Provider>
    );
};

export const DarkLight = () => {
    const { theme, handleToggleTheme } = useContext(BioContext);

    return (
        <div
            className={`p-4 h-lvh flex flex-col justify-center items-center 
            ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
            <h1 className="text-2xl font-bold mb-2">Dark Light Mode Website</h1>
            <p>Hello !! My React v19 Fans</p>


            
            <button
                onClick={handleToggleTheme}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
            >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );
};
