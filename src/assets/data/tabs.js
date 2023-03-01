import { getDateNum } from '@/libs/utils';

const tabList = [
  {
    id: 1,
    tabText: '当天',
    routeName: 'day',
    iconText: getDateNum('day'),
  },
  {
    id: 2,
    tabText: '近期',
    routeName: 'month',
    iconText: getDateNum('month'),
  },
  {
    id: 3,
    tabText: '当年',
    routeName: 'year',
    iconText: getDateNum('year'),
  },
];
export default tabList;
