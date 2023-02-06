import { CorsOptions } from 'cors';
const ipRegexp =
  /^http:\/\/(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|:)){4}\d+$/;
const localhostRegexp = /^http:\/\/localhost:\d+$/;
const pwLiveRegexp = /^https:\/\/([a-zA-Z-]+\.)*pw.live$/;
const whiteListedRegexpAndUrls: (string | RegExp)[] = [
  ipRegexp,
  localhostRegexp,
  pwLiveRegexp,
];
export const corsCustomOrigin: CorsOptions['origin'] = (origin, callback) => {
  // origin is undefined for requests from REST tools or server-to-server requests
  // !origin check is added to allow serving those requests
  if (!origin || whiteListedRegexpAndUrls.some((v) => !!origin.match(v))) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
};
