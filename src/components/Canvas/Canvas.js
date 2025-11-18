import React, { useEffect, useState } from "react";
import "./Canvas.css";
import LightVisual from "../Light/LightVisual/LightVisual";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";

const Canvas = ({ activeDevice, onClear, onSave, fan, light, onDeviceDrop, onPresetDrop }) => {

    const [rotation, setRotation] = useState(0);

    // const [{ isOver, canDrop }, drop] = useDrop(() => ({
    //     accept: [ItemTypes.DEVICE, ItemTypes.PRESET],  // FIXED
    //     drop: (item) => {
    //         if (item.deviceType) onDeviceDrop(item.deviceType);
    //         if (item.presetId) onPresetDrop(item.presetId);
    //     },
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver(),
    //         canDrop: monitor.canDrop(),
    //     }),
    // }));


    const [{ isOver, canDrop }, drop] = useDrop(() => ({
            // accept: ["PRESET", "DEVICE"],
            accept: [ItemTypes.DEVICE, ItemTypes.PRESET],
            drop: (item) => {
                console.log("DROP EVENT:", item);
                if (item.deviceType) 
                    onDeviceDrop(item.deviceType);
                if (item.presetId) 
                    onPresetDrop(item.presetId);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [onDeviceDrop, onPresetDrop]
    );





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

            {/* <div className="canvas-box"> */}
            <div ref={drop} className={`canvas-box ${isOver && canDrop ? "canvas-hover" : ""}`} style={{ pointerEvents: "auto" }} >
            {/* <div ref={drop} className={`canvas-box ${isOver ? "canvas-hover" : ""}`} > */}


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
                                marginBottom: "100px",
                                transform: `rotate(${rotation}deg)`,
                            }}
                            alt="Fan"
                        />
                    </div>
                )}

                {!activeDevice && (
                    <p className="canvas-placeholder">
                        Drag a device or preset here to start testing.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Canvas;
