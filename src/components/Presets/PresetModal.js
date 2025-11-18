import React, { useState } from "react";
import "./PresetModal.css";

const PresetModal = ({ isOpen, onClose, onSave, showToast }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name.trim()) {
      setError("Preset name cannot be empty.");
      return;
    }

    onSave(name.trim());
    setName("");
    setError("");

    // Show success toast
    showToast("Preset saved");

    onClose();
  };

  return (
    <>
      {toast && (
        <div className="preset-toast">
          <span className="toast-icon">✔</span>
          Preset saved
        </div>
      )}

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
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== "") setError("");
            }}
          />

          {error && <p className="preset-error">{error}</p>}

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
    </>
  );
};

export default PresetModal;


// import React, { useState } from "react";
// import "./PresetModal.css";

// const PresetModal = ({ isOpen, onClose, onSave }) => {
//   const [name, setName] = useState("");

//   if (!isOpen) return null;

//   const handleSave = () => {
//     if (!name.trim()) return;
//     onSave(name.trim());
//     setName("");
//   };

//   return (
//     <div className="preset-modal-overlay">
//       <div className="preset-modal">
//         <div className="preset-modal-header">
//           <h3>Give me a name</h3>
//           <button className="preset-close" onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <input
//           type="text"
//           className="preset-input"
//           placeholder="Name it"
//           value={name}
//           required
//           onChange={(e) => setName(e.target.value)}
//         />

//         <p className="preset-note">
//           By adding this effect as a preset you can reuse this anytime.
//         </p>

//         <div className="preset-btn-row">
//           <button className="preset-btn cancel" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="preset-btn save" onClick={handleSave}>
//             Save Preset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PresetModal;
