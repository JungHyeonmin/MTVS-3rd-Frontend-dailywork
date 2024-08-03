/* 04_property-change-add-remove(프로퍼티 값 변경, 추가, 삭제) */

var dog = {
    name: '뽀삐'
}

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
dog.name = '두부';
// dog['name'] = '두부';
console.log(dog);

/* 프로퍼티 동적 추가
존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성 되어 추가되고 프로퍼티 값이 할당 된다.
*/
dog.age = 3;
// dog['age'] = 3;
console.log(dog);

/* 프로퍼티 삭제
delete 연산자는 객체의 프로퍼티를 삭제한다.
만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다 */
delete dog.age;
// delete dog['age'];
delete dog.something;
// delete dog['something'];
console.log(dog);