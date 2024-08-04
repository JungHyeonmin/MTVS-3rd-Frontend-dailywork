// Symbol feature
// Symbol을 이용하면 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 숨김 프로퍼티를 만들 수 있다.

let student = {
    name : "홍길동"
};

// id 심볼 생성 후 프로퍼티로 추가한다.
let id = Symbol("id");
student[id] = 1;

// student 객체의 키 값, 프로퍼티 이름 등에 name만 나타나고 id는 나타나지 않는다.
console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));

console.log(student[id]);

// 객체 리터럴 안에서 사용할 경우 대괄호를 사용해 심볼형 키를 만들어야 한다.
let student2 = {
    name : "유관순",
    age : 16,
    [id] : 2
}

// 키가 심볼인 프로퍼티는 for...in 반복문에서 배제된다.
for(let key in student2) console.log(key);

/* 외부 스크립트나 라이브러리는 심볼 정보를 갖고 있지 않아서 프로퍼티에 직접 접근하는 것이 불가능하다.
따라서 심볼형 키를 사용하면 프로퍼티가 우연히라도 사용되거나 덮어씌워 지는 걸 예방할 수 있다.
심볼은 완전히 숨길 수는 없다. 내장 메서드 Object.getOwnPropertySymbols(obj)를 사용하면 모든 심볼을 볼 수 있다.
하지만 대부분의 라이브러리, 내장 함수 등은 이런 메서드를 사용하지 않는다.
*/
console.log(Object.getOwnPropertySymbols(student));
console.log(Object.getOwnPropertySymbols(student2));

// System Symbol을 이용하면 내장 메서드 등의 기본 동작을 변경할 수 있다.
/* 잘 알려진 심볼(well-known symbols)
https://tc39.es/ecma262/#sec-well-known-symbols (명세서 참조)
Symbol.iterator => ieterable 참조
*/

// => Symbol은 중복 되지 않는 상수 값을 생성하는 것은 물론 
// 기존에 작성 된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 즉 하위 호환성을 보장하기 위해 도입 되었다고 할 수 있다.
