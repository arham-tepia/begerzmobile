export interface User {
  status?: boolean;
  beg?: any;
}

const addNewBegToListAction = (user: User) => {
  return {
    type: 'addNewBegToList',
    user: user
  };
};

export default addNewBegToListAction;
