const INITIAL_STATE: string = '';

const addNewBegToListReducer = (state = INITIAL_STATE, action: any) => {
  // console.log('in add counter reducer');
  switch (action.type) {
    case 'addNewBegToList': {
      return action.user;
    }
    default:
      return state;
  }
};

export default addNewBegToListReducer;
