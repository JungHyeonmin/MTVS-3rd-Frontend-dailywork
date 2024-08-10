/**
 * 01_strict-mode(엄격 모드)
 */

function test() {
    // 암묵적으로 전역 변수가 된다.
    x = 10;
}

test();

console.log(x); // 10

/**
 * 개발자의 의도와 상관 없이 발생한 암묵적 전역은 오류를 발생시키는 원인이 될 수 있으므로
 * 반드시 var, let, const 키워드를 사용하여 변수를 선언한 다음 사용해야한다.
 * 이와 같은 잠재적 오류 발생을 근본적으로 막기 위해 ES5부터 strict mode(엄격 모드)가 추가 되었다.
 */

/**
 * ESLint 같은 린트 도구를 사용해도 유사한 효과를 얻을 수 있다.
 * 정적 분석 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여
 * 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅 해주는 유용한 도구이다.
 */

/**
 *참고로 ES6에서 도입된 클래스와 모듈은 기본적으로 strict mode가 적용된다.
 */