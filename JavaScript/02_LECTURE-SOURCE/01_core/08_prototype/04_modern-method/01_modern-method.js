/** 모던 메소드 - 프로토타입 접근 시 사용
 *
 * 8-4. modern method
 *
 * 8-4-1. modern method
 * - __proto__를 getter, setter 로 직접 사용하면 키가 "__proto__"일때 에러가 발생하는 의도하지 않은 결과가 나올 수 있어
 *   아래와 같은 메서드를 사용하는 것이 좋다.
 */
const user = {
    activate: true
};
  
// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체를 만듦
// 프로토타입이 user인 새로운 객체를 생성
const student = Object.create(user);
console.log(student.activate);                        // true

// Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환
console.log(Object.getPrototypeOf(student) === user);  // true

// Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정
Object.setPrototypeOf(student, {}); // student의 프로토타입을 {}으로 변경
console.log(Object.getPrototypeOf(student) === user);  // false

// __proto__ 를 getter, setter로 직접 사용하면 때문에 키가 "__proto__"일 때 에러가 발생 하는 의도하지 않은 결과가 나올 수 있다.
const obj = {};

let key = "__proto__";
obj[key] = "값 설정";
console.log(obj[key]);      // "값 설정"이 아닌 [object Object]가 출력
obj[key] = { test : '새로운 객체 덮어쓰기'};
console.log(obj[key]);      // 새로운 객체로 덮어쓰기 되는 문제 발생


console.log();


const user1 = {
    activate: true
};

const student1 = Object.create(user1);
console.log(student1.activate);

console.log(Object.getPrototypeOf(student1) === user1);

Object.setPrototypeOf(student1, {});
console.log(Object.getPrototypeOf(student1) === user1);

const obj1 = {};

let key1 = "__proto__";
obj[key1] = "값 설정";
console.log(obj1[key1]); // 객체의 프로토타입 자체를 가져옴

obj1[key1] = {test: "새로운 값으로 덮어쓰기"};
console.log(obj[key]);