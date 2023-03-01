import getDayData from './day';
import getMonthData from './month';
import getYearData from './year';
import { formatChsDateMap, formatChsDate } from '@/libs/utils';
import store from '@/store';

//整合数据请求方法与field的映射关系
const requestMap = {
  day: getDayData,
  month: getMonthData,
  year: getYearData,
};

async function getData(field, date) {
  try {
    //获取field映射的数据请求方法
    const requestFn = requestMap[field];
    //返回获取的数据
    let res = await requestFn(date);
    store.commit('setErrorCode', res.error_code);
    if (res.error_code !== 0) {
      return;
    }
    //将数据存储至vuex
    let data;
    console.log(res);
    switch (field) {
      case 'day':
        data = {
          ...res.result.data,
          date: formatChsDate(res.result.data.date),
          'year-month': formatChsDate(res.result.data['year-month']),
        };
        break;
      case 'month':
        data = formatChsDateMap(res.result.data.holiday_array, 'festival');
        break;
      case 'year':
        data = formatChsDateMap(res.result.data.holiday_list, 'startday');
        break;
      default:
        break;
    }
    store.commit('setData', {
      field,
      data,
    });
  } catch (error) {
    store.commit('setErrorCode', 404);
  }
}

export default getData;
