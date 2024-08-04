// Function, String, Number을 비롯한 내장 객체들 역시 프로토타입에 메서드를 저장한다.
// 모든 내장 프로토타입의 상속 트리 꼭대기엔 Object.prototype이 있어야 한다고 규정한다. - 그림
const num = new Number(100);

// num은 Number.prototype을 상속받았는가?
console.log( num.__proto__ === Number.prototype ); // true

// num은 Object.prototype을 상속받았는가?
console.log( num.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있다.
console.log( num.__proto__.__proto__.__proto__ ); // null

// Object.prototype에도 메서드 toString이 있다
// 중복 메서드가 있을 때는 체인 상에서 가까운 곳에 있는 메서드가 사용된다.
// Number.prototype이 체인 상에서 더 가깝기 때문에 예시에선 Number.prototype의 toString이 사용된다.
console.log(num);
console.log(num.toString());

// 참고
// 문자열과 숫자, 불린처럼 원시 타입 값의 프로퍼티에 접근하려고 하면 
// 내장 생성자 String, Number, Boolean을 사용하는 임시 래퍼(wrapper) 객체가 생성되고 임시 래퍼 객체는 메서드를 제공하고 난 후에 사라진다.
// undefined와 null에 대응하는 래퍼 객체는 없다.

// 내장 프로토타입은 수정 가능하다.
String.prototype.hello = function() {
    console.log(`hello, ${this}`);
  };
  
  "JavaScript".hello(); // hello, JavaScript

// 내장 프로토타입의 메서드를 빌려와 새로운 메서드를 만드는 것 역시 가능하다.
  const obj = {
    0: "Hello",
    1: "JavaScript!",
    length: 2,
  };
  
  obj.join = Array.prototype.join;
  
  console.log( obj.join(',') ); // Hello,JavaScript!

// 그러나 내장 프로토타입 변경은 되도록 하지 않아야 한다.
// 내장 프로토타입은 새로 명세서에 등록된 기능을 사용하고 싶은데 자바스크립트 엔진엔 이 기능이 구현되어있지 않을 때만 변경하는 게 좋다.