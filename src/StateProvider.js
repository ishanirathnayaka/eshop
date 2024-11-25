import React, { createContext, useContext, useReducer } from "react";

// Create the Context
export const StateContext = createContext();

// Define the StateProvider Component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Custom Hook to Consume the State Context
export const useStateValue = () => useContext(StateContext);
