/**
   * search reducer : for search state
   */

const search = (state = '' , action) => {
    switch (action.type) {
      case 'SEARCH_TODO':
        return action.title;
      default:
        return state;
    }
};
  
export default search