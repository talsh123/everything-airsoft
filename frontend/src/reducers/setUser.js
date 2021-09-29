import { set_user } from '../actions';

// When invoked, setUserReducer update the user state to the current logged user
// On default, it return the current state
const setUserReducer = (
  state = {
    _id: undefined,
    username: undefined,
    hash: undefined,
    email: undefined,
    communities: [],
    isVerified: false,
    isModerator: false,
    isAdmin: false,
  },
  action
) => {
  switch (action.type) {
    case set_user:
      state = {
        userId: action.payload.userId,
        username: action.payload.username,
        hash: action.payload.hash,
        email: action.payload.email,
        communities: action.payload.communities,
        isVerified: action.payload.isVerified,
        isModerator: action.payload.isModerator,
        isAdmin: action.payload.isAdmin,
      };
      return state;
    default:
      return state;
  }
};

export default setUserReducer;
