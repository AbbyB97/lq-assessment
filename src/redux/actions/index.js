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

export const setScore = () => async (dispatch, getState) => {
  const questionSet = getState().quizReducer.questionSet;
  const score = getState().quizReducer.score;
  const answers = getState().quizReducer.answers;
  let new_score = 0;
  answers.map((answer, i) => answer === questionSet[i].correct && new_score++);
  // let isCorrect = questionSet[number].correct === answer;
  // let new_score = isCorrect ? score + 1 : score;
  dispatch({
    type: types.SET_SCORE,
    payload: new_score,
  });
};

export const setAnswer = (number, answer) => async (dispatch, getState) => {
  const answers = getState().quizReducer.answers;
  // const score = getState().quizReducer.score;

  // let isCorrect = questionSet[number].correct === answer;
  // let new_score = isCorrect ? score + 1 : score;
  let new_answers = replaceAt(answers, number, answer);
  dispatch({
    type: types.SET_ANSWER,
    payload: new_answers,
  });
  dispatch(setScore());
};

export const resetTestReducer = () => async (dispatch) => {
  dispatch({
    type: types.RESET_TEST,
  });
};

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
