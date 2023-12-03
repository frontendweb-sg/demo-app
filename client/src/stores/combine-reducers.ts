export const combineReducers = (reducers: any) => (state: any, action: any) => {
  return Object.keys(reducers).reduce((acc, key) => {
    acc[key] = reducers[key](state[key], action);
    return acc;
  }, {} as any);
};

// export const combineReducers = (reducers: any) => {
//   return (prevState: any, action: any) => {
//     const nextState = {};
//     Object.keys(reducers).forEach((key) => {
//       nextState[key] = reducers[key](prevState[key], action);
//     });
//     return nextState;
//   };
// };
