import format from 'date-fns/format';

const getTimeStr = (date: Date) => format(date, 'yyyy-MM-dd HH:mm:ss');

export default getTimeStr;
