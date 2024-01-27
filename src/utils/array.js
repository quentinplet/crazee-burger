export const findArrayElementById = (array, id) => {
  return array.find((element) => element.id === id);
};

export const filterArrayById = (array, id) => {
  return array.filter((element) => element.id !== id);
};

export const findIndexById = (array, id) => {
  return array.findIndex((element) => element.id === id);
};
