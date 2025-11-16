import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import "./Sidebar.css";

const DeviceItem = ({ type, label, onClick, className }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.DEVICE,
    item: { deviceType: type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`sidebar-device ${className || ""}`}
      onClick={onClick}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: "grab",
      }}
    >
      {label}
    </div>
  );
};

export default DeviceItem;
