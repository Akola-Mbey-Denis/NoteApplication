const getNoteIdFromRoute = (route) => {
  return route.params?.noteId;
};

export default getNoteIdFromRoute;
