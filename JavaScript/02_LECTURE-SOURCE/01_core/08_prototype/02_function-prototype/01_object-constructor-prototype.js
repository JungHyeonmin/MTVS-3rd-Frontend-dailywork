/**
 *
 * 8-2-1. object constructor prototype 생성자 함수 프로토타입
 *
 * - new 연산자를 사용해 만든 객체는 생성자 함수의 프로토타입 정보를 사용해 [[Prototype]]을 설정한다.
 * - F.prototype 은 new F를 호출할 때만 사용된다. new F를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 할당한다.
 */
const user = {
    activate: true,
    login: function () {
        console.log('로그인 되었습니다.');
    }
};

function Student(name) {
    this.name = name;
}

// 여기서의 prototype은 앞에서 배운 프로토타입과 이름만 같을 뿐 
// 실제로는 일반적인 프로퍼티이다.
Student.prototype = user;

// F.prototype은 new F를 호출할 때만 사용된다.
// new F를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 할당한다.
// student.__proto__ == user
let student = new Student("홍길동");

console.log(student.activate);


console.log();


// 객체 man 정의
const man = {
    activate: true,
    login: function () {
        console.log('로그인 되었습니다.');
    }
};

// 생성자 함수 Mark - name 속성 값을 가지고 Mark 객체를 생성한다.
function Mark(name) {
    this.name = name;
}

// Mark 생성자로 생성된 모든 객체들이 man 을 상속 받도록 한다. = man 객체의 모든 프로퍼티를 사용할 수 있다.
Mark.prototype = man;

// jung 이라는 이름의 Mark 객체 생성
let jung = new Mark('정현민');

// Mark 객체 jung 이 상속받은 man 의 프로퍼티와 메서드를 호출
console.log(jung.activate);
jung.login();
