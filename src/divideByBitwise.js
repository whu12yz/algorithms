/**
 * @file divideByBitwise.js 使用移位操作实现除法
 */
function divide(dividend, divisor) {
  if (divisor === 0) return;
  const isNegative = (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)
  absDividend = Math.abs(dividend);
  absDivisor = Math.abs(divisor);
  let quotient = 0;
  //absDividend = absDivisor * (2^n + 2^(n-1) + ... )
  while (absDividend >= absDivisor) {
      let count = 0;
      let tmp = absDivisor;
      let halfAbsDividend = absDividend >> 1;
      while(tmp < halfAbsDividend) {
          tmp = tmp << 1;
          count++;
      }
      quotient += 1 << count;
      absDividend -= tmp;
  }
  if (!isNegative && (quotient >= Math.pow(2, 31) - 1)) {
    return Math.pow(2, 31) - 1;
  }
  return isNegative ? - quotient : quotient;
}