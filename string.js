export const unaccent = (str) => {
  str = str.toLowerCase();
  // we can also use this instead of from line 11 to line 17
  // str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
  // str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
  // str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
  // str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
  // str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
  // str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
  // str = str.replace(/\u0111/g, "d");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");

  // some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
};

export const capitalizeFirstLetter = (str) => {
  if (!str) {
    return "";
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

// Easy --> truncate('Easy Frontend', 4) --> 'Eas...'
// Horizontal ellipsis code is 8230.
// String.fromCodePoint(8230)
// UTF-16 '\u2026'
// https://www.compart.com/en/unicode/U+2026
// length
// length <= maxLength --> show full
// length > maxLength --> truncate
export const truncate = (text, maxlength) => {
  if (text.length <= maxlength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
};

// ================================================================
function getOpenBracket(closingBracket) {
  if (closingBracket === "]") return "[";
  if (closingBracket === "}") return "{";
  if (closingBracket === ")") return "(";

  return undefined;
}

function isValidBracketPairs(str) {
  if (str === "") return true;

  const OPENING_BRACKETS = ["[", "{", "("];
  const CLOSING_BRACKETS = ["]", "}", ")"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    console.log(character);

    if (OPENING_BRACKETS.includes(character)) {
      stack.push(character);
      continue;
    }

    if (CLOSING_BRACKETS.includes(character)) {
      const openBracket = getOpenBracket(character);
      if (stack[stack.length - 1] !== openBracket) return false;

      // Otherwise, remove the top bracket pair
      stack.pop();
    }
  }

  return stack.length === 0;
}


// function isValidBracketPairs(str) {
//   // your code here
//    const pairs = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     }
//     let bracket;
//     const stack = [];

//     for (let i = 0; i < str.length; ++i) {

//         bracket = str[i];

//         switch (bracket) {
//             case '(':
//             case '[':
//             case '{':
//                 stack.push(bracket);
//                 break;
//             case ')':
//             case ']':
//             case '}':
//                 if (stack[stack.length - 1] !== pairs[bracket]) {
//                     return false;
//                 }
//                 stack.pop();
//                 break;
//             default:
//                 break;
//         }
//     }

//     return stack.length === 0;
// }