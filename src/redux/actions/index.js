import * as types from "../types";
import quizQuestions from "../../static/questions";

export const setDifficultyAction = (difficulty) => async (dispatch) => {
  dispatch({
    type: types.SET_DIFFICULTY,
    payload: difficulty,
  });
  dispatch(setQuestions(difficulty));
};

export const setQuestions = (difficulty) => async (dispatch) => {
  let questionSet = [...quizQuestions[difficulty]];
  dispatch({
    type: types.SET_QUESTIONS,
    payload: questionSet,
  });
};

export const setScore = (isCorrect) => async (dispatch, getState) => {
  let score = getState().quizReducer.score;
  let new_score = isCorrect ? score + 1 : score;

  dispatch({
    type: types.SET_SCORE,
    payload: new_score,
  });
};

export const resetTestReducer = () => async (dispatch) => {
  dispatch({
    type: types.RESET_TEST,
  });
};
