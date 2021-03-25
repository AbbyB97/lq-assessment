import * as types from "../types";
import quizQuestions from "../../static/questions";

export const simpleAction = () => ({
  type: types.SIMPLE_ACTION,
  payload: "result_of_simple_action",
});

export const setDifficultyAction = (difficulty) => async (dispatch) => {
  console.log("diff act", difficulty);
  dispatch({
    type: types.SET_DIFFICULTY,
    payload: difficulty,
  });
  dispatch(setQuestions(difficulty));
};

export const setQuestions = (difficulty) => async (dispatch) => {
  console.log("setQuestions act", quizQuestions[difficulty]);
  let questionSet = [...quizQuestions[difficulty]];
  dispatch({
    type: types.SET_QUESTIONS,
    payload: questionSet,
  });
};

export const setScore = (isCorrect) => async (dispatch, getState) => {
  console.log("isCOrrect act", isCorrect);
  let score = getState().quizReducer.score;
  console.log("score", score);
  let new_score = isCorrect ? score + 1 : score;

  dispatch({
    type: types.SET_SCORE,
    payload: new_score,
  });
};

export const resetTestReducer = () => async (dispatch) => {
  console.log("resetting test");
  dispatch({
    type: types.RESET_TEST,
  });
};
