import React, { useContext } from "react";
import "./Sidebar.css";
import DeviceItem from "./DeviceItem";
import PresetItem from "./PresetItem";
import { DeviceContext } from "../../context/DeviceContext";


const Sidebar = ({ onSelectLight, onSelectFan, presets}) => {
    const { deletePreset } = useContext(DeviceContext);

    return (
        <div className="sidebar">
            <h5>Devices</h5>

            <DeviceItem
                type="light"
                label="💡 Light"
                onClick={onSelectLight}
                className="device-btn"
            />

            <DeviceItem
                type="fan"
                label="🌀 Fan"
                onClick={onSelectFan}
                className="device-btn"
            />

            <hr className="sidebar-separator" />

            <h5 className="sidebar-subtitle">Saved Presets</h5>

            {(!presets || presets.length === 0) && (
                <p className="preset-empty">Nothing added yet</p>
            )}

            {presets.map((preset) => (
                <PresetItem key={preset.id} preset={preset} deletePreset={deletePreset} />
            ))}
            
        </div>
    );
};


export default Sidebar;