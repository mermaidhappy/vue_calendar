import axios from 'axios';
import { JUHE_APPKEY } from '@/configs/API';
function axiosPost(options) {
  axios({
    url: options.url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      ...options.data,
      key: JUHE_APPKEY,
    },
  })
    .then(res => {
      options.success(res.data);
    })
    .catch(err => {
      options.error(err);
    });
}

function axiosGet(options) {
  axios(`${options.url}&key=${JUHE_APPKEY}`)
    .then(res => options.success(res.data))
    .catch(err => {
      options.error(err);
    });
}

export { axiosPost, axiosGet };
