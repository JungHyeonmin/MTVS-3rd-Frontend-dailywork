// 02. various usage(다양한 사용법)

// 할당 연산자 우측엔 모든 이터러블이 올 수 있고 할당 연산자 좌측엔 뭐든지 올 수 있다. 객체 프로퍼티도 가능하다. 
let user = {};
[user.firstName, user.lastName] = "Gwansoon Yu".split(' ');

console.log(user.firstName); 

// Object.entries()와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있다.
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); 
}

// 변수 교환 용도로도 사용할 수 있다.
let student = "유관순";
let teacher = "홍길동";

[student, teacher] = [teacher, student];

console.log(`학생 : ${student}, 교사 : ${teacher}`); 

// rest parameter ...로 나머지 요소를 한 번에 가져올 수도 있다.
let [sign1, sign2, ...rest] = ["양자리", "황소자리", "쌍둥이자리", "게자리", "사자자리"];

console.log(sign1); 
console.log(sign2); 
console.log(rest); 

// 기본 값을 설정하고 사용할 수도 있다.
let [firstName4 = "아무개", lastName4 = "김"] = ["길동"];

console.log(firstName4);    // 배열에서 받아온 값
console.log(lastName4);     // 기본값
