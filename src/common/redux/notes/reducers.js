import R from 'ramda';
export const reset = () => [];

export const addNote = (state, action) => {
  return R.uniqBy(R.prop('id'), [...state, action.payload]);
};

export const updateNote = (state, action) => {
  return state.map(item => {
    if (item.id === action.payload.id) {
      return {
        ...item,
        ...action.payload,
      };
    } else {
      return item;
    }
  });
};

export const cleanNotes = (state) => {
  return state.filter(item => Boolean(item.text || item.title));
};

export const deleteNote = (state, action) => {
  return state.filter(item => item.id !== action.payload);
};
