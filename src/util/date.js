import koLocale from "timeago.js/lib/lang/ko";
import { format, register } from "timeago.js";

register("ko", koLocale);

export const foramtAgo = (date, lang = "en") => {
  return format(date, lang);
};
