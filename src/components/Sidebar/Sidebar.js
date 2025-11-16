import React from "react";
import "./Sidebar.css";
import { ItemTypes } from "../../ItemTypes";
import { useDrag } from "react-dnd";
import DeviceItem from "./DeviceItem";


const Sidebar = ({ onSelectLight, onSelectFan }) => {
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


            <div className="preset-list">
                <h5>Saved Presets</h5>
                <div className="preset-item">Nothing added yet</div>
            </div>
        </div>
    );
};


export default Sidebar;