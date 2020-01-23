import router from '../router'
import Cookie from './cache'
import { round, times, mod, div } from './big-math'
import moment from 'moment'

export function timeFormat(time) {
  return moment(+time).format(
    "YYYY-MM-DD HH:mm:ss"
  );
}

export function timer(time, callback = () => { }) {
  callback(time);
  if (+time === 0) {
    return () => { };
  }
  let timer = setInterval(() => {
    time = +time - 1;
    callback(time);
    if (time < 1) {
      clearInterval(timer);
    }
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}

export function countTimeFormat(time) {
  time = +time;
  let h = round(div(div(time, 60), 60),0,0);
  let m = round(div(mod(time, 60 * 60), 60),0,0);
  let s = round(mod(time, 60),0,0);
  return `${+h >= 10 ? h : "0" + h} : ${+m >= 10 ? m : "0" + m} : ${
    +s >= 10 ? s : "0" + s
  }`;
}

/**
 * 判断登录
 */
export function isLogin() {
  return Cookie.get("token");
}

/**
 * 统一登录，登录完回到登录前页面继续执行
 */
export function toLogin(callback) {
  if (!isLogin()) {
    router.push({
      path: "/login.html",
      query: {
        redirect: encodeURIComponent(router.currentRoute.fullPath)
      }
    });
    return;
  }
}

export function login(token, sign, appid) {
  Cookie.set("token", token, { expires: 14 });
  Cookie.set("sign", sign, { expires: 14 });
  Cookie.set("appid", appid, { expires: 14 });
}

/**
 * 防抖函数，一段时间后执行回调函数
 * @param callback
 * @param delay
 * @returns {Function}
 */
export const debounce = (callback, delay, timer = null) => () => {
  const context = this, args = arguments;
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback.apply(context, args);
  }, delay);
}

/**
 * 截流函数，一段时间内只能执行一次
 * @param callback
 * @param delay
 * @returns {Function}
 */
export const throttle = (callback, delay, isAvail = true) => () => {
  const args = arguments, ctx = this
  if (isAvail) {
    callback.apply(ctx, args)
    isAvail = false
    setTimeout(() => {
      isAvail = true
    }, delay)
  }
}


