# **Device Sandbox Simulator**

A full-stack interactive device simulation app built with **React**, **Laravel**, and **MySQL**, allowing users to drag & drop virtual devices, interact with their settings, and save reusable configuration presets.

---

## 🚀 **Overview**

Device Sandbox Simulator is a web-based testing environment where users can experiment with virtual **Light** and **Fan** devices.
Each device supports real-time interaction through an intuitive control panel.
Users can drag-and-drop devices onto a working canvas, adjust their settings visually, and save/load presets through a backend API.

This project demonstrates:

* Modern drag–drop interaction
* Real-time device state simulation
* Responsive visual rendering
* Full CRUD backend communication
* Clean UI/UX inspired by smart home apps

---

## 🚀 Live Demo
#### **Client Part :** 
  * **Live Demo :** [https://library-management-frontend-eta-umber.vercel.app](https://library-management-frontend-eta-umber.vercel.app)
* **Repository :** [git@github.com:Irfan-Chowdhury/device-sandbox-simulator-client.git](git@github.com:Irfan-Chowdhury/device-sandbox-simulator-client.git)

#### **Server Part :** 

  * **Live Link :** [https://bookingservice.irfandev.xyz](https://bookingservice.irfandev.xyz)
* **Repository :** [https://github.com/Irfan-Chowdhury/device-sandbox-simulator](https://github.com/Irfan-Chowdhury/device-sandbox-simulator)

---


## 🧩 **Features**

### 🔹 **Drag & Drop Interface**

* Devices (Light, Fan) are draggable from the sidebar.
* Users can drop devices onto the Canvas to activate them.
* When dropped:

  * The device appears in the center of the Canvas.
  * Its control panel automatically opens.

---

### 🔹 **Light Device**

* Toggle Power (ON/OFF)
* Select Color Temperature

  * Warm
  * Neutral
  * Cool
  * Pink
* Adjustable Brightness (0%–100%)
* Real-time glowing effect matching brightness & color
* Smooth animations & fading layers

---

### 🔹 **Fan Device**

* Toggle Power
* Adjustable Speed (0–100%)
* Smooth spinning animation rendered with rotation frames
* Dynamic progress bar visual

---

### 🔹 **Preset Management**

Users can save custom device configurations:

* Light states (power, brightness, color)
* Fan states (power, speed)

Presets appear in the sidebar:

* Draggable (same as devices)
* On drop:

  * All device configurations are restored instantly
  * Corresponding control panels become active
* Delete presets directly from sidebar
* Save Preset modal UI for naming presets

---

### 🔹 **Backend Integration**

Save, load, and delete presets via Laravel-powered API:

* `/api/presets` (GET) — Fetch all presets
* `/api/presets/{id}` (GET) — Load preset
* `/api/presets` (POST) — Create preset
* `/api/presets/{id}` (DELETE) — Delete preset

Data saved in MySQL using this JSON structure:

```json
{
  "light": {
    "power": true,
    "brightness": 75,
    "color": "warm"
  },
  "fan": {
    "power": false,
    "speed": 0
  }
}
```

---

## 🛠 **Tech Stack**

### **Frontend**

* React (Functional Components + Hooks)
* React DnD (drag & drop)
* Context API (global state management)
* Custom UI components (LightVisual, FanControls, etc.)

### **Backend**

* Laravel (API mode)
* MySQL (JSON fields)
* RESTful Controller Architecture
* CORS enabled for React integration

---

## 📁 **Project Structure**

### **Frontend**

```
src/
 ├── api/
 │    └── api.js
 ├── components/
 │    ├── Canvas/
 │    ├── Sidebar/
 │    ├── Presets/
 │    ├── Light/
 │    └── Fan/
 ├── context/
 │    └── DeviceContext.js
 ├── ItemTypes.js
 └── App.js
```

### **Backend**

```
app/
 ├── Models/
 │    └── Preset.php
 └── Http/
      └── Controllers/
           └── Api/
               └── PresetController.php

database/
 └── migrations/
      └── create_presets_table.php
```

---

## 🎯 **How It Works**

### 1️⃣ Drag Device → Drop on Canvas

Canvas identifies the type and activates the corresponding device panel.

### 2️⃣ Adjust Settings

UI updates the visual simulation in real time.

### 3️⃣ Save Preset

User enters a name → the preset is sent to backend → added to sidebar list.

### 4️⃣ Drag Preset → Drop on Canvas

Preset instantly restores device configuration.

---

## 🔧 **Installation & Setup**

### **Backend Setup**

```sh
git clone <repository-url>
cd device-sandbox-backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### **Frontend Setup**

```sh
git clone <repository-url>
cd device-sandbox-frontend
npm install
npm start
```

Set API base URL in `src/api/api.js`:

```js
export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});
```

---

## 📌 **Future Enhancements (Optional)**

* Device position saving (drag within canvas)
* Multiple devices placement
* Rename presets
* Preset thumbnail preview
* Authentication for user-based preset storage
* Export/Import preset files
* Cloud sync support

---

## 📝 **Conclusion**

Device Sandbox Simulator is a complete demonstration of:

✔ Smart Home device UX <br>
✔ Real-time visual simulation <br>
✔ Modern drag-drop UI patterns <br>
✔ Full-stack CRUD API integration <br>
✔ React + Laravel interoperability 

This can be extended into a professional IoT dashboard, smart home controller, or interactive device prototyping tool.

---

<!-- # packages
npm install react-dnd react-dnd-html5-backend
npm install axios -->

