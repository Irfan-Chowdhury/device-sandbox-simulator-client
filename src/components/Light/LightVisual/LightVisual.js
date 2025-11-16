// ========== 6th faze ===============

import React from "react";
import "./LightVisual.css";

const LightVisual = ({ power, brightness, color }) => {
    if (!power) {
        return (
            <div className="light-visual-wrapper">
                <img
                    src="/assets/images/light/light-off.png"
                    className="bulb-off"
                    alt="Light Off"
                    style={{
                        width: "80px",
                        height: "120px",
                        marginBottom: "50px"
                    }}
                />
            </div>
        );
    }

    const B = brightness / 50; // তোমার কাস্টম লজিক 그대로 রাখা হয়েছে

    // ⭐ COLOR MAPPING
    const colorMap = {
        warm: "255, 215, 157",   // yellow / warm
        neutral: "255, 255, 255",// pure white
        cool: "142, 201, 229",   // sky blue
        pink: "233, 163, 181"    // pink
    };

    const glowColor = colorMap[color] || colorMap["warm"];

    const baseOn = "/assets/images/light/light-on.png";
    const glowOn = "/assets/images/light/light-on-with-brightness.png";

    const glowSize = 150 + B * 600;  // outer area
    const glowBlur = 50 + B * 50;    // softness

    return (
        <div className="light-visual-wrapper">

            {/* OUTER GLOW AREA */}
            <div
                className="outer-glow"
                style={{
                    // boxShadow: `0 0 ${glowSize}px ${glowBlur}px rgba(255, 215, 157, ${B * 0.7})`,
                    boxShadow: `0 0 ${glowSize}px ${glowBlur}px rgba(${glowColor}, ${B * 0.7})`,

                    opacity: B,
                }}
            />

            {/* BASE LIGHT IMAGE */}
            <img
                src={baseOn}
                className="bulb-img bulb-on"
                alt="Bulb Light"
            />

            {/* INNER GLOW (Cross-fade PNG) */}
            <img
                src={glowOn}
                className="bulb-img bulb-glow-layer"
                style={{ opacity: B, width: "0px", }}
                alt="Bulb Glow"
            />
        </div>
    );
};

export default LightVisual;

