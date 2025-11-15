export default function DeviceReducer(state, action) {
    switch (action.type) {
      // কোন ডিভাইস সিলেক্ট আছে (light / fan / null)
      case "SET_ACTIVE_DEVICE":
        return {
          ...state,
          activeDevice: action.payload, // "light" | "fan" | null
        };
  
      // LIGHT ACTIONS
      case "TOGGLE_LIGHT_POWER":
        return {
          ...state,
          light: { ...state.light, power: !state.light.power },
        };
  
      case "SET_LIGHT_BRIGHTNESS":
        return {
          ...state,
          light: { ...state.light, brightness: action.payload },
        };
  
      case "SET_LIGHT_COLOR":
        return {
          ...state,
          light: { ...state.light, color: action.payload },
        };
  
      // পুরো light object একবারে সেট করতে চাইলে (App.js থেকে SET_LIGHT_STATE)
      case "SET_LIGHT_STATE":
        return {
          ...state,
          light: action.payload,
        };
  
      // FAN ACTIONS
      case "TOGGLE_FAN_POWER":
        return {
          ...state,
          fan: { ...state.fan, power: !state.fan.power },
        };
  
      case "SET_FAN_SPEED":
        return {
          ...state,
          fan: { ...state.fan, speed: action.payload },
        };
  
      // পুরো fan object একবারে সেট
      case "SET_FAN_STATE":
        return {
          ...state,
          fan: action.payload,
        };
  
      // PRESETS
      case "SAVE_PRESET":
        return {
          ...state,
          presets: [...state.presets, action.payload],
        };
  
      // CLEAR
      case "CLEAR_DEVICE":
        return {
          ...state,
          activeDevice: null,
        };
  
      default:
        return state;
    }
  }
  