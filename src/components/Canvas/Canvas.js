import React, { useEffect, useState } from "react";
import "./Canvas.css";

// const Canvas = ({ activeDevice, fan }) => {
const Canvas = ({ activeDevice, onClear, onSave, fan }) => {
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

                {activeDevice === "light" && (
                    <div className="device-display">
                        <img
                            src="/light bulb.jpg"
                            alt="Light Bulb"
                            className="light-img"
                        />
                    </div>
                )}

                {activeDevice === "fan" && (
                    <div className="device-display">
                        <img
                        src="/assets/images/fan.png"
                        className={`fan-image ${fan.power ? "spin" : ""}`}
                        style={{
                            animationDuration: `${2 - fan.speed / 50}s`,
                            width: "300px",
                            height: "300px",
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
