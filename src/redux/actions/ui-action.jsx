export const SetResizableContainer = (width, height) => {
  return {
    type: "SET_RESIZABLE_CONTAINER",
    payload: {
      w: width,
      h: height
    }
  };
};
