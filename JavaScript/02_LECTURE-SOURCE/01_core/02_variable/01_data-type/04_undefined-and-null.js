/* 04_undefined-and-null */

/* 
undefined 타입
undefined 타입의 값은 undefined가 유일하다.
var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 되므로 
변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
undefined는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이므로
개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있으므로 지양한다.
*/
var undef;
console.log(undef);

/*
null 타입
null 타입의 값은 null이 유일하다.
변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다. 
이전에 할당 되어 있던 값에 대한 참조를 명시적으로 제거하지 않는 것을 의미하고
자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행하게 된다.
*/

var nullVal = 'something';
nullVal = null; // 이전 참조를 제거하여 더 이상 'something'을 참조하지 않는다.
console.log(nullVal);


