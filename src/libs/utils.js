const padZero = function (str) {
  return str.padStart(2, 0);
};

const getDateNum = function (type, ifPadZero = true) {
  const nowDate = new Date();
  if (!type) {
    return ifPadZero
      ? {
          day: padZero(nowDate.getDate().toString()),
          month: padZero(nowDate.getMonth() + 1 + ''),
          year: nowDate.getFullYear().toString(),
        }
      : {
          day: nowDate.getDate().toString(),
          month: nowDate.getMonth() + 1 + '',
          year: nowDate.getFullYear().toString(),
        };
  }
  switch (type) {
    case 'day':
      return padZero(nowDate.getDate().toString());
    case 'month':
      return padZero(nowDate.getMonth() + 1 + '');
    case 'year':
      return nowDate.getFullYear().toString().slice(2);
    default:
      break;
  }
};

const getPlaceholderMap = function () {
  const { day, month, year } = getDateNum();
  return {
    day: `格式：${year}${month}${day} (${year}年${month}月${day}日)`,
    month: `格式：${year}${month} (${year}年${month}月)`,
    year: `格式：${year} (${year}年)`,
  };
};
// 获取今日日期
const getTodayDate = function (field) {
  const { day, month, year } = getDateNum(undefined, false);
  switch (field) {
    case 'day':
      return `${year}-${month}-${day}`;
      break;
    case 'month':
      return `${year}-${month}`;
      break;
    case 'year':
      return year;
      break;
  }
};

const formatDate = function (date) {
  //20230102 -> 2023-1-2
  //202301 -> 2023-1
  //2023 -> 2023
  const year = date.slice(0, 4),
    month = date.slice(4, 6),
    day = date.slice(6);
  let dateArr = [year, month, day];
  dateArr = dateArr
    .filter(item => item !== '')
    .map(i => (i[0] === '0' ? i[1] : i));
  return dateArr.join('-');
};
const formatChsDate = function (date) {
  //2023-1-2 ->2023年01月02日
  //2023-1 ->2023年01月
  //2023 ->2023年
  const chsMap = ['年', '月', '日'];
  let dateArr = date.split('-');
  dateArr = dateArr.map((item, index) => item.padStart(2, '0') + chsMap[index]);
  return dateArr.join('');
};
const formatChsDateMap = function (arr, key) {
  return arr.map(item => {
    item[key] = formatChsDate(item[key]);
    return item;
  });
};

export {
  getDateNum,
  getPlaceholderMap,
  formatDate,
  formatChsDate,
  getTodayDate,
  formatChsDateMap,
};
