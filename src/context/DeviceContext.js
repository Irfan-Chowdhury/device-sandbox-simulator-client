import React, { createContext, useEffect, useReducer } from "react";
import DeviceReducer from "./DeviceReducer";
import { api } from "../api/api";

const initialState = {
    activeDevice: null,
    light: {
        power: false,
        brightness: 0,
        color: "warm",
    },
    fan: {
        power: false,
        speed: 0,
    },
    presets: [],
};


export const DeviceContext = createContext(initialState);


export const DeviceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DeviceReducer, initialState);

    // LOAD ALL PRESETS FROM BACKEND
    const loadPresets = async () => {
        const res = await api.get("/presets");
        dispatch({
        type: "LOAD_PRESETS",
        payload: res.data, // array from DB
        });
    };

      // SAVE PRESET TO BACKEND
    const savePreset = async (name, light, fan) => {
        const res = await api.post("/presets", {
        name,
        light,
        fan,
        });

        dispatch({
        type: "ADD_PRESET",
        payload: res.data,
        });
    };

    // DELETE PRESET
    const deletePreset = async (id) => {
        await api.delete(`/presets/${id}`);

        dispatch({
        type: "DELETE_PRESET",
        payload: id,
        });
    };

    // AUTO LOAD on app start
    useEffect(() => {
        loadPresets();
    }, []);


    return (
        <DeviceContext.Provider value={{ state, dispatch, loadPresets, savePreset, deletePreset }}>
            {children}
        </DeviceContext.Provider>
    );
};