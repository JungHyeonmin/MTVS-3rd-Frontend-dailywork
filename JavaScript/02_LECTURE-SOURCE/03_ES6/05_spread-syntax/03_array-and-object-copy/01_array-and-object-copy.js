// 01. array and object copy (스프레드 문법을 이용한 배열, 객체 복사)

let arr = [10, 30, 20];
let arrCopy = [...arr];
console.log(arr);       
console.log(arrCopy);     
console.log(arr === arrCopy);  // false
arrCopy.push(50);      // 복사본 배열에 값 추가
console.log(arr);  
console.log(arrCopy);  

// 스프레드 문법의 대상은 이터러블이어야 하지만 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 허용하고 있다.
let obj = { name : '홍길동', age : 20 };
let objCopy = { ...obj };
console.log(obj);       
console.log(objCopy);     
console.log(obj === objCopy);  // false
objCopy.age = 30;      // 복사본 객체에 값 수정
console.log(obj);   
console.log(objCopy);  

/* 스프레드 문법을 사용할 경우
let arrCopy = Object.assign([], arr); let objCopy = Object.assign({}, obj); 
또는 slice() 보다 간결한 문법으로 배열, 객체를 복사할 수 있다. */

/* 스프레드 문법과 나머지 매개변수의 구분
스프레드 문법 : 배열을 목록으로 확장해주므로 ...이 함수 호출 시, 배열이나 객체 리터럴 내부에 사용된다. 
나머지 매개변수 : 인수 목록의 나머지를 배열로 모아주므로 ...이 함수 매개변수의 끝에 있다. 
두 가지 문법을 함께 사용하면 매개변수 목록과 배열 간 전환을 쉽게 할 수 있다. */