// const middleware = (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig);

const getMiddleware = (config) => {
  return (getDefaultMiddleware) => {
    return getDefaultMiddleware(config);
  };
};

export default getMiddleware;
