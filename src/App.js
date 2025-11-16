import React, { useContext, useState } from "react";
import { DeviceContext } from "./context/DeviceContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Canvas from "./components/Canvas/Canvas";
import LightControls from "./components/Light/LightControls";
import FanControls from "./components/Fan/FanControls";
import "./App.css";

function App() {
  const { state, dispatch } = useContext(DeviceContext);

  const [activeDevice, setActiveDevice] = useState("fan");
  const handleSelectLight = () => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: "light" });
  };

  const handleSelectFan = () => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: "fan" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_DEVICE" });
  };

  const handleSave = () => {
    const preset = {
      id: Date.now(),
      light: state.light,
      fan: state.fan,
    };
    dispatch({ type: "SAVE_PRESET", payload: preset });
    alert("Preset Saved!");
  };

    // 👉 নতুন handler
  const handleDeviceDrop = (deviceType) => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: deviceType });
  };

  return (
    <div className="d-flex app-root">
      {/* SIDEBAR */}
      <Sidebar onSelectLight={handleSelectLight} onSelectFan={handleSelectFan} />

      {/* MAIN AREA */}
      <div className="main flex-fill">
        
        <Canvas
          activeDevice={state.activeDevice}
          onClear={handleClear}
          onSave={handleSave}
          fan={state.fan}
          light={state.light}
          onDeviceDrop={handleDeviceDrop}
        />


        {/* LIGHT CONTROLS */}
        {state.activeDevice === "light" && (
          <LightControls
            light={state.light}
            setLight={(updated) =>
              dispatch({
                type: "SET_LIGHT_STATE",
                payload: updated,
              })
            }
          />
        )}

        {/* FAN CONTROLS */}
        {state.activeDevice === "fan" && (
          <FanControls
            fan={state.fan}
            setFan={(updated) =>
              dispatch({
                type: "SET_FAN_STATE",
                payload: updated,
              })
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
