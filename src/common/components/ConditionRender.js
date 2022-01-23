import React, { Component }from 'react';

// const ConditionRender = (renderIf,props) => {
//   return function (renderIf) {
//     if (!renderIf) {
//       return null;
//     }
//     return <Component {...props} />;
//   };
// };

export const ConditionRenderComponent= ({
  renderIf,
  children
}) => {
  if (!renderIf) {
    return null;
  }
  return <>{children}</>;
};

// export default ConditionRender;
