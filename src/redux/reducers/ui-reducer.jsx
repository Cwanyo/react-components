const initState = {
  ResizableContainer: { w: "300px", h: "300px" }
};

const UIReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_RESIZABLE_CONTAINER": {
      const newRC = { w: action.payload.w, h: action.payload.h };

      return { ...state, ResizableContainer: newRC };
    }
    default:
      return state;
  }
};

export default UIReducer;
