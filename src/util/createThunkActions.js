/**
 * Redux thunk actions creator
 */
const createThunkActions = (actionName) => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAIL: `${actionName}_FAIL`,
  COMPLETE: `${actionName}_COMPLETE`,
});

export default createThunkActions;
