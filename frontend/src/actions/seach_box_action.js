import * as SearchBoxAPIS from "../util/search_box_util";

export const RECEIVE_LABELS = "RECEIVE_LABELS";

export const receiveLabels = payload => ({
  type: RECEIVE_LABELS,
  payload
});

export const getResultFromVision = file => dispatch => {
  return SearchBoxAPIS.getResultFromVision(file).then(res => {
    debugger
      console.log("getLabels by vision: " + res);
      return dispatch(receiveLabels(res));
  });
};