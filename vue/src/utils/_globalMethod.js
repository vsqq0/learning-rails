import { get as getIn } from "lodash";
import { get, post, baseURL } from "./request";
import moment from "moment";

export default {
  install: (Vue, option) => {
    Vue.prototype.$getIn = getIn;
    Vue.prototype.$baseURL = baseURL;
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
    Vue.prototype.$moment = moment;
  }
};
