import * as types from "../../types";
const initialState = {
  difficulty: "",
  questionSet: null,
  answers: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
};
