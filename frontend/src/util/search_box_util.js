import axios from 'axios';
// import {visionApiKey} from '../../../config/keys';


export const uploadImageToS3 = file => {
    return axios.post('/api/image-upload',file);
};

// export const getLabelByImageUrl = request => {
//     return axios.post(`https://googleapis.com/v1/images:annotate?key=${visionApiKey}`, request);   
// };