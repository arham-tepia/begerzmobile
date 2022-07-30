export const ERRORS = {
  signin: {
    emailnotvalid: '*Please enter a valid username',
    passwordnotvalid: '*Please enter a valid password'
  },
  signup: {
    emailalreadytaken: '*This email is already taken',
    usernamealreadytaken: '*This username might be already taken'
  },
  forgetPassword: {
    checkEntry: '*Check your entry and try again'
  },
  resetPassword: {
    makeSure: '*Please make sure your entry has the following criteria:'
  }
};

export const CRITERIAS = {
  resetPassword:
    '1 Lower Case Letter\n1 Upper Case Letter\n1 Number\n1 Symbol\nAt least 8 characters'
};
