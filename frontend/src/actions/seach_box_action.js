import * as SearchBoxAPIS from "../util/search_box_util";
import { debug } from "util";

export const RECEIVE_IMAGE_URL = "RECEIVE_IMAGE_URL";
export const RECEIVE_LABEL = "RECEIVE_LABEL";

export const receiveImageURL = payload => ({
  type: RECEIVE_IMAGE_URL,
  payload
});

export const receiveLabel = payload => ({
  type: RECEIVE_LABEL,
  payload
});

export const getImageURLByAWS = file => dispatch => {
  return SearchBoxAPIS.uploadImageToS3(file).then(res => {
    console.log("geImageURLBYAws: " + res);
    return dispatch(receiveImageURL(res));
  });
};
export const getLabelsByVision = request => dispatch => {
  return SearchBoxAPIS.getLabelByImageUrl(request).then(res => {
    console.log("getLabels by vision: " + res);
    return dispatch(receiveLabel(res));
  });
};
