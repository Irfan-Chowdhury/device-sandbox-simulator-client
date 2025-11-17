import React, { useContext, useState } from "react";
import { DeviceContext } from "./context/DeviceContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Canvas from "./components/Canvas/Canvas";
import LightControls from "./components/Light/LightControls";
import FanControls from "./components/Fan/FanControls";
import "./App.css";
import PresetModal from "./components/Presets/PresetModal";

function App() {
  const { state, dispatch, savePreset, deletePreset } = useContext(DeviceContext);

  const [presetModalOpen, setPresetModalOpen] = useState(false);

  const [activeDevice, setActiveDevice] = useState("fan");

  const handleSelectLight = () => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: "light" });
  };

  const handleSelectFan = () => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: "fan" });
  };

  const handleDeviceDrop = (deviceType) => {
    dispatch({ type: "SET_ACTIVE_DEVICE", payload: deviceType });
  };

  // const handlePresetDrop = (presetId) => {
  //   const preset = state.presets.find((p) => p.id === presetId);
  //   if (!preset) return;

  //   dispatch({
  //     type: "APPLY_PRESET",
  //     payload: {
  //       light: preset.light,
  //       fan: preset.fan,
  //     },
  //   });

  //   // optional: কোন device show হবে
  //   // যদি preset এর fan.power বেশি থাকে, fan দেখাতে পারো — আপাতত light ধরলাম
  //   dispatch({ type: "SET_ACTIVE_DEVICE", payload: "light" });
  // };


  // const handlePresetDrop = (presetId) => {
  //   const preset = state.presets.find((p) => p.id === presetId);
  //   if (!preset) return;

  //   // Apply preset data
  //   dispatch({
  //     type: "APPLY_PRESET",
  //     payload: {
  //       light: preset.devices_json.light,
  //       fan: preset.devices_json.fan,
  //     },
  //   });

  //   // Decide which device should be active
  //   if (preset.devices_json.light.power) {
  //     dispatch({ type: "SET_ACTIVE_DEVICE", payload: "light" });
  //   } else if (preset.devices_json.fan.power) {
  //     dispatch({ type: "SET_ACTIVE_DEVICE", payload: "fan" });
  //   } else {
  //     dispatch({ type: "SET_ACTIVE_DEVICE", payload: null });
  //   }
  // };

  const handlePresetDrop = (presetId) => {
    
    const preset = state.presets.find((p) => p.id === presetId);
    if (!preset) return;

    const data = preset.devices_json; // REAL data from DB

    // apply settings
    dispatch({
      type: "APPLY_PRESET",
      payload: {
        light: data.light,
        fan: data.fan,
      },
    });

    // now decide which device to show
    if (data.fan.power) {
      dispatch({ type: "SET_ACTIVE_DEVICE", payload: "fan" });
    } else if (data.light.power) {
      dispatch({ type: "SET_ACTIVE_DEVICE", payload: "light" });
    } else {
      dispatch({ type: "SET_ACTIVE_DEVICE", payload: null });
    }
  };





  const handleClear = () => {
    dispatch({ type: "CLEAR_DEVICE" });
  };

  const openSaveModal = () => {
    setPresetModalOpen(true);
  };

  // const savePresetWithName = (name) => {
  //     const preset = {
  //         id: Date.now(),
  //         name,
  //         light: state.light,
  //         fan: state.fan,
  //     };

  //     dispatch({ type: "SAVE_PRESET", payload: preset });
  //     setPresetModalOpen(false);
  // };

  const savePresetWithName = (name) => {
    savePreset(name, state.light, state.fan); // backend POST
    setPresetModalOpen(false);
  };

  return (
    <div className="d-flex app-root">
      {/* SIDEBAR */}
      <Sidebar
        onSelectLight={handleSelectLight}
        onSelectFan={handleSelectFan}
        presets={state.presets}
      />

      {/* MAIN AREA */}
      <div className="main flex-fill">

        <Canvas
          activeDevice={state.activeDevice}
          onClear={handleClear}
          onSave={openSaveModal}
          fan={state.fan}
          light={state.light}
          onDeviceDrop={handleDeviceDrop}
          onPresetDrop={handlePresetDrop}
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


      <PresetModal
        isOpen={presetModalOpen}
        onClose={() => setPresetModalOpen(false)}
        onSave={savePresetWithName}
      />
    </div>
  );
}

export default App;
