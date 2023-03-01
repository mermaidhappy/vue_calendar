export default {
  setCurRouteName(state, routeName) {
    state.curRouteName = routeName;
  },
  setData(state, { field, data }) {
    switch (field) {
      case 'day':
        state.dayData = data;
        break;
      case 'month':
        state.monthData = data;
        break;
      case 'year':
        state.yearData = data;
        break;
      default:
        break;
    }
  },
  setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
};
