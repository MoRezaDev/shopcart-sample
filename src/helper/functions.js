const shorten = (title) => {
  const splittedTitle = title.split(" ");
  const newTitle = `${splittedTitle[0]} ${splittedTitle[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const Result = !!state.selectedItems.find((item) => item.id === id);
  return Result;
};

const quantityCount = (state, id) => {
  const result = state.selectedItems.findIndex((item) => item.id === id);
  if (result === -1) {
    return false;
  } else {
    return state.selectedItems[result].quantity;
  }
};
export { shorten, isInCart, quantityCount };
