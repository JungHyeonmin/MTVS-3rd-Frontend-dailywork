/* 01_ optional-chaining-operator(옵셔널 체이닝 연산자)
ES11(ECMAScript2020)에서 도입된 연산자로 죄항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/

var obj = null;

// TypeError: Cannot read properties of null (reading 'value')
// var val = obj.value; //obj 가 null 이라면 참조를 못하기 때문에 에러가 발생한다.
var val = obj?.value;   // ?를 붙이면 'obj 가 null 이 아닐때 참조한다.'라는 뜻으로 바뀐다.
console.log(val);   // 정의 되지않은, undefined 라는 값이 들어가있다.


// 옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 사용한 단축 평가로 확인했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.

// len에 str 즉 빈 문자열이 담긴다
// var len = str && str.length;
// 빈 문자열은 null 또는 undefined가 아니므로 문자열의 길이 값이 담긴다
var str = '';
var len = str?.length;
console.log(len);   // 0(문자열이 없기때문에 '0'이 출력된다.)
