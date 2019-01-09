import types from "../Actions/Types";

export const theme = data => {
  const color = data === true ? "light" : "dark";
  return {
    type: types.RIGHTTHEME,
    data: {
      color
    }
  };
}; // end Sample
