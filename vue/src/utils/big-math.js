import Big from "big.js";

/**
 * 浮点数加法
 * @param num1 {string,number} 被加数
 * @param num2 {string,number} 加数
 * @returns {string}
 */
export const plus = (num1, num2) =>
  +Big(num1)
    .plus(num2)
    .toString();

/**
 * 浮点数减法
 * @param num1 {string,number} 被减数
 * @param num2 {string,number} 减数
 * @returns {string}
 */
export const minus = (num1, num2) =>
  +Big(num1)
    .minus(num2)
    .toString();

/**
 * 浮点数除法
 * @param num1 {string,number} 被除数
 * @param num2 {string,number} 减数
 * @returns {string}
 */
export const div = (num1, num2) =>
  +Big(num1)
    .div(num2)
    .toString();

/**
 * 浮点数乘法
 * @param num1 {string,number} 被乘数
 * @param num2 {string,number} 乘数
 * @returns {string}
 */
export const times = (num1, num2) =>
  +Big(num1)
    .times(num2)
    .toString();

/**
 * 浮点数约数
 * @param num1 {string,number} 被约数
 * @param num2 {string,number} 约数
 * @returns {string}
 */
export const mod = (num1, num2) =>
  +Big(num1)
    .mod(num2)
    .toString();

/**
 * 浮点数进位, type默认0。 0-向下取(截位) 1-四舍五入 2-两边舍入 3-向上取(进位)
 * @param num
 * @param {number} decimal 保留几位数
 * @param {number} type
 * @returns {string}
 */
export const round = (num, decimal=2, type = 1) =>
  (+Big(num||0)
    .round(decimal, type)
    .toString()).toFixed(decimal);

export default { plus, minus, div, times, mod, round };
