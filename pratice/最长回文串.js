/**
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 示例 2：
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length<2){
      return s
  }
  let res=''
    for (let i = 0; i < s.length; i++) {
        // 回文子串长度是奇数
        method(i,i)
        // 回文子串长度是偶数
        console.log(res,i)
        method(i,i+1)
        console.log(res)
    }
    function method(m,n){
        while (m>=0&&n<s.length&&s[m]===s[n]){ //m 必须是大于等于0的 并且n是小于字符长度的
            m--
            n++
        }
        if (n-m-1>res.length){
        res=s.slice(m+1,n)
    }}
  return  res
};

console.log(longestPalindrome("cdbabad"))
