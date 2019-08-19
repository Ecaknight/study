/**
 * 557. 反转字符串中的单词 III
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 */
//第一种解法: 感觉比较特定, 但是活用了JavaScript中提供的各种api
//将字符串按空格分割成数组, 将每个元素利用map进行遍历接着split进一步分割利用reserve将每个字符进行反转,再合并成字符串,最终将所有合并成字符串,返回最终值
// export default (str) => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('');
//   }).join(' ');
// }

//还是利用split, reverse, join进行处理
//tips: 个人觉得就是利用了两次反转将字符串的值反转到原来的位置, 这个真心觉得简单
// export default (str) => {
//   return str.split('').reverse().join('').split(' ').reverse().join(' ');
// }

//还是利用split, reverse, join进行处理, 不过内容不一样
// export default (str) => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('');
//   }).join(' ');
// }

//练习代码
export default (str) => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
}
