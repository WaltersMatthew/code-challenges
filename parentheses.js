// good if only one type of brackets in problem
// counter method
function validParentheses(str) {
    let count = 0;
    for (const letter of str) {
        if (letter === "(") count++;
        else if (letter === ")") count--;
        if (count < 0) return false;
    }
    return count === 0;
}

// good for multi-bracket problems

//use a stack
let count = 0;
var isValid = function (s) {
    let stacker = [];
    for (let i = 0; i < s.length; i++) {
        let top = stacker[stacker.length - 1];
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stacker.push(s[i]);
        } else if (
            (top === "(" && s[i] === ")") ||
            (top === "{" && s[i] === "}") ||
            (top === "[" && s[i] === "]")
        ) {
            stacker.pop();
        } else return false;
    }
    return stacker.length ? false : true;
};

//hashmap
var ValidParens = function (s) {
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    let stacker = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stacker.push(s[i]);
        } else if (stacker[stacker.length - 1] === map[s[i]]) {
            stacker.pop();
        } else return false;
    }
    return stacker.length ? false : true;
};
console.log(ValidParens("(){}[]"));

//Kheff solve

const validParentheses = (str) => {
    const obj = {
        "{": "}",
        "[": "]",
        "(": ")",
    };

    const arr = [];

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            arr.push(str[i]);
        } else {
            if (obj[arr.pop()] !== str[i]) {
                return false;
            }
        }
    }

    return !arr.length;
};
