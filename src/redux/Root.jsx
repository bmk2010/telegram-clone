const initialState = {
  accesToken: localStorage.getItem("accesToken"),
  refreshToken: localStorage.getItem("refreshToken"),
};

const AuthReducer = (state = initialState, action) => {
  if (action.type == "login") {
    return {
      ...state,
      accesToken: action.payload,
    };
  }
  return state
};

export default AuthReducer