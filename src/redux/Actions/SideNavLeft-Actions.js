import types from "../Actions/Types";

export const theme = data => {
  const color = data === true ? "dark" : "light";
  return {
    type: types.LEFTTHEME,
    data: {
      color
    }
  };
}; // end Sample
