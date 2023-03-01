import { axiosPost } from '@/libs/http';
import { API } from '@/configs/API';
function getMonthData(yearMonth) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: API.GET_MONTH_DATA,
      data: {
        'year-month': yearMonth,
      },
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
export default getMonthData;
