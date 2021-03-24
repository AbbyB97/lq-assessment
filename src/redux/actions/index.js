import * as types from "../types";

export const simpleAction = () => ({
  type: types.SIMPLE_ACTION,
  payload: "result_of_simple_action",
});

export const setDifficultyAction = (difficulty) => ({
  type: types.SET_DIFFICULTY,
  payload: difficulty,
});
