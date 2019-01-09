import types from "../Actions/Types";

export const theme = data => {
  const color = data === true ? "light" : "dark";
  return {
    type: types.HEADERTHEME,
    data: {
      color
    }
  };
}; // end Sample
