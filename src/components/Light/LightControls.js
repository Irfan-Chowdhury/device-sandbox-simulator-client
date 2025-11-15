import React from "react";
import "./LightControls.css";


const LightControls = ({ light, setLight }) => {
    return (
        <div className="control-panel-light">
            <div className="form-group mb-3">
                <label>Power</label>
                <input
                    type="checkbox"
                    checked={light.power}
                    onChange={() => setLight({ ...light, power: !light.power })}
                />
            </div>


            <div className="form-group mb-3">
                <label>Color Temperature</label>
                <div className="color-options">
                    <button
                        className="warm"
                        onClick={() => setLight({ ...light, color: "warm" })}
                    ></button>
                    <button
                        className="neutral"
                        onClick={() => setLight({ ...light, color: "neutral" })}
                    ></button>
                    <button
                        className="cool"
                        onClick={() => setLight({ ...light, color: "cool" })}
                    ></button>
                    <button
                        className="pink"
                        onClick={() => setLight({ ...light, color: "pink" })}
                    ></button>
                </div>
            </div>


            <div className="form-group slider mb-2">
                <label>Brightness</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={light.brightness}
                    onChange={(e) =>
                        setLight({ ...light, brightness: Number(e.target.value) })
                    }
                />
            </div>
        </div>
    );
};


export default LightControls;