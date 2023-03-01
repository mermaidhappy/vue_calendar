import { axiosPost } from '@/libs/http';
import { API } from '@/configs/API';

function getDayData(date) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: API.GET_DAY_DATA,
      data: { date },
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

export default getDayData;
