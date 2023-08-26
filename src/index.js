const OPEN_BRACKETS = ['(', '{', '[', '|'];
    const CLOSE_BRACKETS = {
      [')']: '(',
      ['}']: '{',
      [']']: '[',
      ['|']: '|',
    };

module.exports = function check(str, bracketsConfig) {
  const bracketsMap = Object.fromEntries(bracketsConfig);

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];

    if (bracketsMap[currentBracket]) {
      // If it's an opening bracket
      if (stack.length === 0 || stack[stack.length - 1] !== currentBracket) {
        stack.push(currentBracket);
      } else {
        stack.pop(); // Close the bracket
      }
    } else {
      // If it's a closing bracket
      if (stack.length === 0 || bracketsMap[stack.pop()] !== currentBracket) {
        return false; // Mismatch or empty stack
      }
    }
  }

  return stack.length === 0; // Return true if stack is empty, otherwise false
};