// 01. array and string 
// 배열, 문자열 등은 대표적인 이터러블이다.
for (let char of "JavaScript") {    // 문자열을 for...of 반복문으로 호출한다.
    console.log(char);
}

// 문자열이나 배열 같은 내장 이터러블에도 Symbol.iterator가 구현되어 있어 명시적으로 호출 할 수도 있다.
// 자주 사용하지는 않지만 필요 시 for...of 사용보다 반복 과정을 더 잘 통제할 수 있다.
let str = "iterable";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}