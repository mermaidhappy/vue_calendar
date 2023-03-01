import { axiosPost } from '@/libs/http';
import { API } from '@/configs/API';
function getYearData(year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: API.GET_YEAR_DATA,
      data: { year },
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
export default getYearData;
