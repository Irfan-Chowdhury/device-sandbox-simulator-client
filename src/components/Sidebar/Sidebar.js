import React from "react";
import "./Sidebar.css";


const Sidebar = ({ onSelectLight, onSelectFan }) => {
return (
<div className="sidebar">
<h5>Devices</h5>


<button className="device-btn" onClick={onSelectLight}>
💡 Light
</button>


<button className="device-btn" onClick={onSelectFan}>
🌀 Fan
</button>


<div className="preset-list">
<h5>Saved Presets</h5>
<div className="preset-item">Nothing added yet</div>
</div>
</div>
);
};


export default Sidebar;