/**
 * 696. 计数二进制子串
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
  重复出现的子串要计算它们出现的次数。
 */

// const countBinarySubstring =  (str) => {
//   const res = []; //存放结果的
//   //匹配模式: 返回左右两边对称
//   let match = (str) => {
//     const left = str.match(/^(0+|1+)/)[0]; //在字符串中匹配0或者是1的字符串,将其设置为左边
//     const right = (left[0] ^ 1).toString().repeat(left.length); //根据左边的字符串重复设置右边的字符串
//     const reg = new RegExp(`^(${left}${right})`);
//     if (reg.test(str)) {
//       return RegExp.$1;
//     } else {
//       return '';
//     }
//   }

//   //通过循环遍历每个字符, 每次截取未匹配的字符串
//   for (var i = 0; i < str.length - 1; i++) {
//     const r = match(str.slice(i));
//     if (r) {
//       res.push(r);
//     }
//   }
//   return res.length;
// };

// const countBinarySubstring = (s) => {
//   let prevRunLength = 0, //记录上一个字符出现的次数?
//     curRunLength = 1, //记录当前字符出现的次数?
//     res = 0; //因为只有01两种, 可以理解为, 当一方的长度大于或者等于另一方的时候, 就出现符合的字符串
//   for (let i = 1; i < s.length; i++) {
//     if (s.charCodeAt(i) == s.charCodeAt(i - 1)) {
//       curRunLength++;
//     } else {
//       prevRunLength = curRunLength;
//       curRunLength = 1;
//     }
//     if (prevRunLength >= curRunLength) res++;
//   }
//   return res;
// };

//练习场
const countBinarySubstring = (str) => {
  let prev = 0,
      cur = 1,
      res = 0;
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) == str.charCodeAt(i - 1)) {
      cur++;
    } else {
      prev = cur;
      cur = 1;
    }
    if (prev >= cur) {
      res++;
    }
  }
  return res;
};

export default countBinarySubstring;
