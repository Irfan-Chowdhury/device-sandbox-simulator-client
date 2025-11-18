import React from "react";
import "./FanControls.css";

const FanControls = ({ fan, setFan }) => {
    //  UPDATE SLIDER FILL COLOR (Correct spot)
  document.documentElement.style.setProperty("--value", fan.speed + "%");
  document.documentElement.style.setProperty("--remain", 100 - fan.speed + "%");

  return (
    <div className="control-panel-fan">
      
      {/* POWER ROW */}
      <div className="row-line">
        <label className="label-text">Power</label>

        <label className="switch">
          <input
            type="checkbox"
            checked={fan.power}
            onChange={() =>
              setFan({ ...fan, power: !fan.power })
            }
          />
          <span className="slider-toggle"></span>
        </label>
      </div>

      {/* SPEED ROW */}
      <div className="row-line">
        <label className="label-text">Speed</label>
        <span className="speed-value">{fan.speed}%</span>
      </div>

      {/* SLIDER */}
      {/* <input
        type="range"
        className="styled-slider"
        min="0"
        max="100"
        value={fan.speed}
        onChange={(e) =>
          setFan({ ...fan, speed: Number(e.target.value) })
        }
      /> */}

      <div className="fan-slider-wrapper">
        <div className="fan-slider-track">
          <div
            className="fan-slider-fill"
            style={{ width: `${fan.speed}%` }}
          ></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={fan.speed}
          className="fan-slider-input"
          onChange={(e) =>
            setFan({ ...fan, speed: Number(e.target.value) })
          }
        />

      </div>

    </div>
  );
};

export default FanControls;
