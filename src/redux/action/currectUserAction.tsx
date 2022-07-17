export interface User {
  id?: string;
  karma?: string;
}

const updateCurrentUserAction = (user: User) => {
  return {
    type: 'updateCurrentUser',
    user: user
  };
};

export default updateCurrentUserAction;
