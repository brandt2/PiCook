import axios from 'axios';
// import {visionApiKey} from '../../../config/keys';

export const getResultFromVision = file => {
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  return axios({
    method: "post",
    url: "/api/image-upload",
    data: bodyFormData,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });
};

// export const getLabelByImageUrl = request => {
//     return axios.post(`https://googleapis.com/v1/images:annotate?key=${visionApiKey}`, request);   
// };
