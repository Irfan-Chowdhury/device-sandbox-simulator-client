import React from "react";
import "./Sidebar.css";
import { ItemTypes } from "../../ItemTypes";
import { useDrag } from "react-dnd";
import DeviceItem from "./DeviceItem";
import PresetItem from "./PresetItem";


const Sidebar = ({ onSelectLight, onSelectFan, presets}) => {

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
                <PresetItem key={preset.id} preset={preset} />
            ))}
        </div>
    );
};


export default Sidebar;