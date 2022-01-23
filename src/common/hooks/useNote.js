import {useDispatch} from 'react-redux';
import {notesActions} from '../redux/notes/slice';
import useNotes from './useNotes';

const getIsArchived = (note) => {
  return note?.archived;
};

const getIsFavorite = (note) => {
  return note?.favorite;
};

const findNote = (id, notes) => {
  return notes.find(note => id === note.id);
};

const useNote = (id = '') => {
  const {notes} = useNotes();
  const dispatch = useDispatch();

  const note = findNote(id, notes);
  const isArchived = getIsArchived(note);
  const isFavorite = getIsFavorite(note);

  const updateNote = (_note) => {
    dispatch(notesActions.updateNote(_note));
  };

  const updateNoteTitle = (title) => {
    dispatch(notesActions.updateNote({id, title}));
  };

  const updateNoteText = (text) => {
    dispatch(notesActions.updateNote({id, text}));
  };

  const addNote = (_note) => {
    dispatch(notesActions.addNote(_note));
  };

  const deleteNote = () => {
    dispatch(notesActions.deleteNote(id));
  };

  const cleanNotes = () => {
    dispatch(notesActions.cleanNotes());
  };

  const toggleNoteArchived = () => {
    if (!note) {
      return;
    }
    if (!note.archived) {
      updateNote({...note, archived: true, favorite: false});
      return;
    }
    updateNote({...note, archived: false});
  };

  const toggleNoteFavorite = () => {
    if (!note) {
      return;
    }
    updateNote({...note, favorite: !note.favorite});
  };

  return {
    note,
    addNote,
    isArchived,
    isFavorite,
    updateNote,
    deleteNote,
    cleanNotes,
    updateNoteText,
    updateNoteTitle,
    toggleNoteArchived,
    toggleNoteFavorite,
  };
};

export default useNote;
