/* 01_Symbol (심볼)
자바스크립트가 ECMAScript로 표준화 된 이래로 자바스크립트에는 6개의 타입(문자열, 숫자, 불리언, undefined, null, 객체)이 있었다.
Symbol은 ES6에서 도입 된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다.
Symbol은 다른 값과 중복 되지 않는 유일무이한 값으로 주로 이름 충돌의 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용 된다.
*/

// 01_Symbol basic syntax (심볼 기본 문법)
// Symbol()을 사용하면 심볼 값을 만들 수 있다.
let symbol1 = Symbol();

// 디버깅 시 유용한 심볼 이름 설명을 붙여 심볼 값을 만들 수도 있다.
let symbol2 = Symbol("mySymbol");

// 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다르다.
// 심볼 이름은 어떤 것에도 영향을 주지 않는 이름표 역할만을 한다.
let symbol3 = Symbol("mySymbol");
console.log(symbol2 == symbol3);    // false - symbol2와 symbol3는 이름만 같을 뿐 다른 값이다.

// 전역 심볼 레지스트리(global symbol registry)에 심볼을 만들고 해당 심볼에 접근하면, 이름이 같은 경우 항상 동일한 심볼을 반환한다.

// Symbol.for(key)를 사용해 이름이 key인 심볼을 전역 심볼 레지스트리에서 읽는다.
let symbol = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만든다.

// 동일한 이름을 이용해 심볼을 다시 읽는다.
let idAgain = Symbol.for("id");

console.log(symbol === idAgain); // true - 두 심볼은 같다.

// 반대로 Symbol.keyFor(symbol)를 사용하면 이름을 얻을 수 있다.
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

/* 심볼은 이름이 같더라도 값이 항상 다르므로 이름이 같을 때 값도 같길 원한다면 전역 레지스트리를 사용해야 한다.
전역 심볼 레지스트리는 애플리케이션 곳곳에서 심볼 이름을 이용해 특정 프로퍼티에 접근해야 할 경우 사용할 수 있다. 
*/