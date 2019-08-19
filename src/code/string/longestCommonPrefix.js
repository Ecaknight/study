/**
 * 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * ["flower","flow","flight"]
 */
// const longestCommonPrefix = (strArr = []) => {
//   let res = '';
//   if (!strArr.length) return res;
//   for (let i = 0; i < strArr[0].length; i++) {
//     for (let j = 1; j < strArr.length; j++) {
//       if (strArr[j][i] != strArr[0][i]) {
//         return res;
//       }
//     }
//     res += strArr[0][i];
//   }
//   return res;
// }

// var longestCommonPrefix = function (strs, re = '') {
//   if (!strs.length) return re;
//   if (strs.length == 1) return strs[0];
//   for (var i = 1; i < strs.length; i++) {
//     if (!strs[i][0]) return re
//     if (strs[i][0] != strs[0][0]) return re
//     strs[i] = strs[i].slice(1, strs[i].length);
//   }
//   re += strs[0][0];
//   strs[0] = strs[0].slice(1, strs[0].length);
//   return longestCommonPrefix(strs, re);
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

//练习场
const longestCommonPrefix = (strArr) => {
  let res = '';
  if (!strArr.length) return res;
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if (strArr[j][i] != strArr[0][i]) {
        return res;
      }
    }
    res += strArr[0][i];
  }
  return res;
}


export default longestCommonPrefix;