import { getPlaceholderMap } from '@/libs/utils';
import errors from '@/assets/data/errors';
const headerTitleMap = {
  day: '当天信息',
  month: '近期假期',
  year: '当年假期',
};

const placeholderMap = getPlaceholderMap();

const maxlengthMap = {
  day: 8,
  month: 6,
  year: 4,
};

export default {
  placeholder(state) {
    return placeholderMap[state.curRouteName];
  },
  maxlength(state) {
    return maxlengthMap[state.curRouteName];
  },
  headerTitle(state) {
    return headerTitleMap[state.curRouteName];
  },
  errorMessage(state) {
    return errors[state.errorCode];
  },
};
