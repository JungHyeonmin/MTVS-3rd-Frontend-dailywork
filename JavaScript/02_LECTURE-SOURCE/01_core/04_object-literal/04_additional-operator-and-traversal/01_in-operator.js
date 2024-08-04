// in 연산자
// 프로퍼티 존재 여부 확인하기

/**
 * 4-4. additional-operator-and-traversal(추가 연산자와 순회)
 *
 * 4-4-1. in operator (in 연산자)
 *
 * in 연산자를 이용해 프로퍼티 존재 여부를 확인할 수 있다.
 */


var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

// 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환
// 프로퍼티 존재 여부를 쉽게 확인
console.log(student.name === undefined);        // false - 존재
console.log(student.height === undefined);      // true - 존재하지 않음
console.log(student.test === undefined);        
// 프로퍼티 값이 undefined라 프로퍼티는 존재하지만 true - 존재하지 않음으로 판별되는 문제

console.log("name" in student);                 // true - 존재
console.log("height" in student);               // false - 존재하지 않음
console.log("test" in student);                 // true - 존재


console.log();


var student = {
    name: '유관순',
    age: 20,
    test: undefined,
};

console.log(student.name === undefined);
console.log(student.height === undefined); // height 라는 프로퍼티가 없다 : false
console.log(student.test === undefined); // 명시적으로 undefined 로 정의해서 true

console.log('name' in student);
console.log('height' in student);
console.log('test' in student);


