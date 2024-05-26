import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import es from "dayjs/locale/es"
import en from "dayjs/locale/en"

dayjs.extend(relativeTime)
const locales: { [key: string]: ILocale } = {
  "es": es,
  "es-ES": es,
  "default": en
}

export const now = (): string => {
  return dayjs().format('YYYY-MM-DD');
}
export const calculateTime = (beginDate: string, endDate: string, locale: string): string => {

  const l = locales[locale] || locales['default'];
  dayjs.locale(l);

  const startDate = dayjs(beginDate);
  const finishDate = dayjs(endDate);

  return finishDate.from(startDate, true)

}
