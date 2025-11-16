import React, { useEffect, useState } from "react";
import "./Canvas.css";
import LightControls from "../Light/LightControls";
import LightVisual from "../Light/LightVisual/LightVisual";

const Canvas = ({ activeDevice, onClear, onSave, fan, light}) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let frame;

        if (activeDevice === "fan" && fan?.power) {
            const animate = () => {
                setRotation((prev) => prev + fan.speed * 0.2); 
                frame = requestAnimationFrame(animate);
            };
            animate();
        }

        return () => cancelAnimationFrame(frame);
    }, [activeDevice, fan?.power, fan?.speed]);

    return (
        <div className="canvas-section">
            <div className="canvas-title d-flex justify-content-between align-items-center">
                <h4>Testing Canvas</h4>

                <div>
                    <button className="btn btn-sm btn-secondary mr-2" onClick={onClear}>
                        Clear
                    </button>

                    <button className="btn btn-sm btn-primary" onClick={onSave}>
                        Save Preset
                    </button>
                 </div>
            </div>

            <div className="canvas-box">

                
                {/* Light */}
                {activeDevice === "light" && (
                    <div className="device-display">
                        <LightVisual 
                            power={light.power} 
                            brightness={light.brightness}
                            color={light.color} 
                        />
                    </div>
                )}



                {/* Fan */}
                {activeDevice === "fan" && (
                    <div className="device-display">
                        <img
                        src="/assets/images/fan.png"
                        className={`fan-image ${fan.power ? "spin" : ""}`}
                        style={{
                            animationDuration: `${2 - fan.speed / 50}s`,
                            width: "250px",
                            height: "250px",
                            marginBottom: "100px"
                        }}
                        alt="Fan"
                        />
                    </div>
                )}


            </div>
        </div>
    );
};

export default Canvas;
