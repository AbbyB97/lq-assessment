import * as types from "../../types";
const initialState = {
  difficulty: "",
  questionSet: null,
  answers: [],
  score: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case types.SET_QUESTIONS:
      return {
        ...state,
        questionSet: action.payload,
      };
    case types.SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case types.SET_ANSWER:
      return {
        ...state,
        answers: action.payload,
      };
    case types.RESET_TEST:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
