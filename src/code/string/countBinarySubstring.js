/**
 * 696. 计数二进制子串
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
  重复出现的子串要计算它们出现的次数。
 */

const countBinarySubstring =  (str) => {
  const res = []; //存放结果的
  //匹配模式
  let match = (str) => {
    const left = str.match(/^(0+|1+)/)[0];
    const right = left.toString().repeat(left.length);
    const reg = new RegExp(`${left}${right}`);
    console.log('reg', reg, RegExp.$1);
    if (reg.test(str)) {
      return RegExp.$1;
    } else {
      return '';
    }
  }

  //通过循环遍历每个字符, 每次截取未匹配的字符串
  for (var i = 0; i < str.length; i++) {
    const r = match(str.slice(i));
    if (r) {
      res.push(r);
    }
  }
  console.log('res', res);
  return res;
};

console.log(countBinarySubstring("00110011"));

// export default countBinarySubstring;
