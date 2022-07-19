const INITIAL_STATE: string = '';

const setDraftedBegReducer = (state = INITIAL_STATE, action: any) => {
  // console.log('in add counter reducer');
  switch (action.type) {
    case 'updateDraftedBeg': {
      return action.user;
    }
    default:
      return state;
  }
};

export default setDraftedBegReducer;
