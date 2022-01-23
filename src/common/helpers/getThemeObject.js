import {themes} from '../constants';

const getThemeObject = (mode, system) => {
  if (mode === 'system') {
    return themes[system || 'light'];
  }
  return themes[mode];
};

export default getThemeObject;
