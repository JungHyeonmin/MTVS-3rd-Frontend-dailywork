
// 02. class expressions(클래스 표현식) 

// 1. 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log('이해하셨나요~?');
    }
};

new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log('우와~ 이해했어요!');
        console.log(MyTutee); // MyTutee라는 이름은 오직 클래스 안에서만 사용할 수 있다.
    }
};

new Tutee().learn();
// console.log(MyTutee); // ReferenceError: MyTutee is not defined, MyTutee는 클래스 밖에서 사용할 수 없다.

// 3. 클래스 동적 생성
function makeTutee(message) {
    // 클래스를 선언하고 이를 반환한다.
    return class {
        feedback() {
            console.log(message);
        };
    };
}

let SecondTutee = makeTutee("10점 만점에 10점~!");
new SecondTutee().feedback();

/* => 클래스 표현식 정의가 가능하다는 것의 의미는
함수처럼 클래스도 일급 객체이며 다른 표현식 내부에서 정의, 전달, 반환, 할당이 가능하다는 것이다. */