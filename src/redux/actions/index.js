import * as types from "../types";
import quizQuestions from "../../static/questions";
import { shuffle, replaceAt } from "../../utils/actionUtils";

export const setDifficultyAction = (difficulty) => async (dispatch) => {
  dispatch({
    type: types.SET_DIFFICULTY,
    payload: difficulty,
  });
  dispatch(setQuestions(difficulty));
};

export const setQuestions = (difficulty) => async (dispatch) => {
  let questions = [];
  if (difficulty === "any") {
    questions = [
      ...quizQuestions["easy"],
      ...quizQuestions["medium"],
      ...quizQuestions["hard"],
    ];
  } else {
    questions = [...quizQuestions[difficulty]];
  }
  let shuffledQuestions = shuffle(questions);
  let questionSet = shuffledQuestions.slice(0, 4);
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
  dispatch({
    type: types.SET_SCORE,
    payload: new_score,
  });
};

export const setAnswer = (number, answer) => async (dispatch, getState) => {
  const answers = getState().quizReducer.answers;

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
