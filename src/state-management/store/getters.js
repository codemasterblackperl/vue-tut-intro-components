import * as types from "./types";

export default {
  [types.GET_VALUE]: (state) => {
    return state.value;
  }
};