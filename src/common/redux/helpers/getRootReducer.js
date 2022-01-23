const getRootReducer = (reducers) => {
  return (state, action) => reducers(state, action);
};

export default getRootReducer;
