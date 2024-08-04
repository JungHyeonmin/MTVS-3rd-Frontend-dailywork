/* 01_error-case(에러 상황) */

// 1. 암묵적 전역
(function(){
    // 'use strict';

    // 선언하지 않은 변수를 참조하면 에러가 발생한다.
    x = 1;          // ReferenceError: x is not defined
    console.log(x);
}());

// 2. 변수, 함수, 매개변수의 삭제
(function(){
    // 'use strict';

    var x = 1;
    // delete 연산자로 변수, 함수, 매개변수를 삭제하면 문법 에러가 발생한다.
    delete x; // strict 모드에서는 식별자에 대해 'delete'를 호출할 수 없습니다.
}());

// 3. 매개변수 이름의 중복
(function(){
    //'use strict';

    function test(x, x) {   // SyntaxError: Duplicate parameter name not allowed in this context
        return x + x;
    }

    console.log(test(1, 2));
}());

// 4. with 문의 사용
(function(){
    //'use strict';

    // with문은 전달된 객체를 스코프 체인에 추가한다.
    // 객체 이름을 생략할 수 있어 코드가 간단해지느 효과가 있지만 
    // 성능과 가독성이 나빠지는 문제가 있어 사용하지 않는 것이 좋다.
    with({ x : 1 }) {   // 'with' 문은 strict 모드에서 사용할 수 없습니다.
        console.log(x);
    }
}());