import axios from "axios";

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
