export const updates = (state, action) => {
  return {...state, ...action.payload};
};
