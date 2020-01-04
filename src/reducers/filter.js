/**
   * filter reducer : for filter (active todos, done todos, all todos) state
   */

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_DONE':
      return 'DONE';
    case 'SHOW_ACTIVE':
      return 'ACTIVE';
    default:
      return state;
  }
};

export default filter