/* 02_object-distructuring-assignment(객체 구조 분해 할당)
구조 분해 할당을 사용하면 배열이나 객체를 변수로 '분해'하여 연결할 수 있다.
*/

// 01. object distructuring assignment basic syntax(객체 구조 분해 할당 기본 문법)

// 상품명과 색상, 가격을 프로퍼티로 가지는 객체
let pants = {
    productName: "배기팬츠",
    color: "검정색",
    price: 30000
};

// 구조 분해 할당을 이용해 productName에는 pants.productName을 color엔 pants.color, price에는 pants.price를 할당한다.
let { productName, color, price } = pants;

console.log(productName);
console.log(color);
console.log(price);

// 각 변수의 서술 순서는 무관하며 { 객체 프로퍼티 : 목표 변수 } 형식으로도 작성할 수 있다.
let { color: co, price: pr, productName: pn } = pants;
console.log(pn);
console.log(co);
console.log(pr);
