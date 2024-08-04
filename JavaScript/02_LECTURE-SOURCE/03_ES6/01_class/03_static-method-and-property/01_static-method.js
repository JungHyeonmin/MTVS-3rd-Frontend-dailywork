/* 03_static-method-and-property(정적 메서드와 정적 프로퍼티) */

// 01. static method(정적 메서드)
// 정적 메서드는 특정 클래스 인스턴스가 아닌 클래스 '전체'에 필요한 기능을 만들 때 사용한다.
class Student {

    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    // 클래스 선언부 안에 위치하고 앞에 static이라는 키워드를 붙인다.
    static compare(studentA, studentB) {
        return studentA.height - studentB.height;   // 인스턴스끼리 비교해주는 메서드 
    }

}

let students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.5),
    new Student('선덕여왕', 159.5)
];

students.sort(Student.compare); // 신장 오름차순으로 배열을 정렬한다.
console.log(students);
// Student.compare는 학생들의 신장을 비교해주는 수단으로 하나의 학생마다 필요한 메서드가 아니라 클래스의 메서드여야 한다. => 정적 메서드

Student.staticMethod = function () {
    console.log('staticMethod는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일하다.');
}

Student.staticMethod();

// 조건에 맞는 Student를 만들어야 할 때 생성자도 사용 가능하지만, 클래스에 정적 메서드를 만들어 팩토리 메서드를 구현할 수 있다.
class User {

    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;
    }

    static registUser(id) {
        return new this(id, new Date());
    }
}

let user01 = User.registUser('user01'); // User.registUser('id값') 메서드 호출을 통해 새로운 User 객체를 만든다.
console.log(user01);
