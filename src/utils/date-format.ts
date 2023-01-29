import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 服务器返回的是utc格式需要扩展
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
