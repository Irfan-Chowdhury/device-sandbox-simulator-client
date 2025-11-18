import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import "./Sidebar.css";

const PresetItem = ({ preset, deletePreset }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PRESET,
    item: { presetId: preset.id },   // THIS IS THE MOST IMPORTANT LINE
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (

    <div
      ref={drag}
      className="preset-item"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        pointerEvents: "auto" // Full row draggable
      }}
    >

      <span className="preset-dot" />
      <span className="preset-name">{preset.name}</span>


      <button
        className="preset-delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();   // IMPORTANT
          deletePreset(preset.id);
        }}
        style={{ pointerEvents: "auto" }}
      >
        ✕
      </button>

    </div>
  );
};

export default PresetItem;






// import React from "react";
// import { useDrag } from "react-dnd";
// import { ItemTypes } from "../../ItemTypes";
// import "./Sidebar.css";


// const PresetItem = ({ preset, deletePreset }) => {
//   console.log("Rendering PresetItem:", preset);

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.PRESET,
//     item: { presetId: preset.id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="preset-item"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//       }}
//     >
//       <span className="preset-dot" />
//       <span className="preset-name">{preset.name}</span>
//     </div>
//   );
// };

// export default PresetItem;