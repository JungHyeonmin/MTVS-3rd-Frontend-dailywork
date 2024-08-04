/* 01_array distructuring assignment(배열 구조 분해 할당)
구조 분해 할당을 사용하면 배열이나 객체를 변수로 '분해'하여 연결할 수 있다.
*/

// 01. array distructuring assignment basic syntax (배열 구조 분해 할당 기본 문법)
// 이름과 성을 요소로 가진 배열
let nameArr = ["Gildong", "Hong"];

// 구조 분해 할당을 이용해 firstName엔 nameArr[0]을 lastName엔 nameArr[1]을 할당한다.
let [firstName, lastName] = nameArr;
// let firstName = nameArr[0];
// let lastName = nameArr[1];

console.log(firstName); 
console.log(lastName);  

// 반환 값이 배열인 spilt 메서드를 활용한 예제
let [firstName2, lastName2] = "Saimdang Shin".split(' ');

console.log(firstName2); 
console.log(lastName2);  

// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있다.
let [firstName3, , lastName3] = ['firstName', 'middleName', 'lastName'];

console.log(firstName3); 
console.log(lastName3);  
