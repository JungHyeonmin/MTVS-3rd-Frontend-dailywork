// 생성자 함수 프로토타입
// new 연산자를 사용해 만든 객체는 
// 생성자 함수의 프로토타입 정보를 사용해 [[Prototype]]을 설정한다.
const user = {
    activate : true,
    login : function(){
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
