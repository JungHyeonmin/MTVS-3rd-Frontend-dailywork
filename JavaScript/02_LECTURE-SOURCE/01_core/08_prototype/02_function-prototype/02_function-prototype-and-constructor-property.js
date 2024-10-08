/**
 * 8-2-2. function prototype and constructor property
 *
 * 함수의 (디폴트 프로퍼티) 프로토타입과 constructor 프로퍼티
 *
 * - 개발자가 특별히 할당하지 않더라도 모든 함수는 기본적으로 "prototype" 프로퍼티를 갖는다.
 * - 디폴트 프로퍼티 "prototype"은 constructor 프로퍼티 하나만 있는 객체를 가리키는데,
 *   여기서 constructor 프로퍼티는 함수 자신을 가리킨다.
*/

function Student() {}
// 함수를 만들기만 해도 디폴트 프로퍼티인 prototype이 설정
// Student.prototype = { constructor: Student }

console.log(Student.prototype.constructor == Student);

let student = new Student();    // // {constructor: Student}을 상속받음
console.log(student.constructor == Student); // true ([[Prototype]]을 거쳐 접근함)



console.log();



// 객체의 생성자 함수가 그 객체의 프로토타입 체인 내에 있는 constructor 속성과 동일한지 검사하는 방법
function Man() {}

console.log(Man.prototype.constructor == Man);

let man = new Man();
console.log(man.constructor == Man);

