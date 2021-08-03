import React, { createContext, useContext} from "react";


// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ setData,initialState, children }) => (
  <StateContext.Provider value={setData( initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);