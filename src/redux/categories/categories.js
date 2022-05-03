// Action types
const CHECK_STATUS = 'CHECK_STATUS';

// Action creators 
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categories = (state = [], action) => {
  switch(action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: 
      return state;
  }
}
