import {useSelector} from 'react-redux';

const selectNotes = (state) => {
  return state.notes;
};

const getFavorites = (notes) => {
  return notes.filter(note => note.favorite);
};

const getArchived = (notes) => {
  return notes.filter(note => note.archived);
};

const getActive = (notes) => {
  return notes.filter(note => !note.archived);
};

const useNotes = () => {
  const notes = useSelector(selectNotes);
  const active = getActive(notes);
  const archived = getArchived(notes);
  const favorites = getFavorites(notes);

  return {notes, active, archived, favorites};
};

export default useNotes;
