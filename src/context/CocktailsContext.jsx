import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCocktails } from '../api/rest';

export const CocktailContext = createContext();
export const useCocktailContext = () => useContext(CocktailContext)

export const CocktailContextProvider = (props) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const setCocktailsItems = async() => {
        const responses = await getCocktails();
        setCocktails(responses)
    }
    setCocktailsItems()
  }, [])

  return (
    <CocktailContext.Provider
        value={{
            cocktails,
        }}>
        {props.children}
    </CocktailContext.Provider>
  );
};