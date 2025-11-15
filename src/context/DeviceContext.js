import React, { createContext, useReducer } from "react";
import DeviceReducer from "./DeviceReducer";


// Initial global state
const initialState = {
    activeDevice: null, // 'light' | 'fan' | null
    light: {
        power: true,
        brightness: 70,
        color: "warm",
    },
    fan: {
        power: true,
        speed: 60,
    },
    presets: [],
};


export const DeviceContext = createContext(initialState);


export const DeviceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DeviceReducer, initialState);


    return (
        <DeviceContext.Provider value={{ state, dispatch }}>
            {children}
        </DeviceContext.Provider>
    );
};