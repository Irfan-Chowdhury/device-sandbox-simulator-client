import React from "react";
import "./LightControls.css";

const LightControls = ({ light, setLight }) => {
    const isOn = light.power;
    const brightness = light.brightness;
    const tempColorMap = {
        warm: "#fbbf24",
        neutral: "#f3f4f6",
        cool: "#60a5fa",
        pink: "#f472b6"
    };
    
    return (
        <div className="light-panel">
            
            {/* POWER TOGGLE */}
            <div className="row-between">
                <label className="label">Power</label>

                <div 
                    className={`toggle ${isOn ? "on" : ""}`}
                    onClick={() => setLight({ ...light, power: !light.power })}
                >
                    <div className="circle"></div>
                </div>
            </div>

            {/* COLOR TEMPERATURE */}
            <label className="label mt-20">Color Temperature</label>
            <div className="temp-row">
                {["warm", "neutral", "cool", "pink"].map((mode) => (
                   
                    <div
                        key={mode}
                        className={`temp-box ${mode} ${light.color === mode ? "active" : ""} ${!isOn ? "inactive-color" : ""}`}
                        onClick={() => isOn && setLight({ ...light, color: mode })}
                    ></div>
                ))}
            </div>

            {/* BRIGHTNESS */}
            <div className="row-between mt-20">
                <label className="label">Brightness</label>
                <span className="percent">{brightness}%</span>
            </div>
            

            <div className="brightness-bar">
                {/* BLUE FILL ALWAYS VISIBLE */}
                <div 
                    className="bar-fill" 
                    style={{
                        width: `${brightness}%`,
                        opacity: isOn ? 1 : 0.45   // when OFF fade but visible
                    }}
                ></div>

                {/* SLIDER */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    disabled={!isOn}
                    onChange={(e) =>
                        setLight({ ...light, brightness: Number(e.target.value) })
                    }
                />
            </div>


        </div>
    );
};

export default LightControls;
