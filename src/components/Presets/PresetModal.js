import React, { useState } from "react";
import "./PresetModal.css";

const PresetModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name.trim()) return;
    onSave(name.trim());
    setName("");
  };

  return (
    <div className="preset-modal-overlay">
      <div className="preset-modal">
        <div className="preset-modal-header">
          <h3>Give me a name</h3>
          <button className="preset-close" onClick={onClose}>
            ×
          </button>
        </div>

        <input
          type="text"
          className="preset-input"
          placeholder="Name it"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="preset-note">
          By adding this effect as a preset you can reuse this anytime.
        </p>

        <div className="preset-btn-row">
          <button className="preset-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="preset-btn save" onClick={handleSave}>
            Save Preset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresetModal;
