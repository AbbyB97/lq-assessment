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
  // for (let i = 0; i < 4; i++) {
  //   let randomInt = randomNumber(0, questions.length - 1);
  //   console.log("random int ", randomInt);
  //   questionSet.push(questions[randomInt]);
  // }
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

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
