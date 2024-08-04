
// 02. various usage (다양한 사용법)
// 객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용할 수 있다.
// 또한 콜론과 할당을 동시에 사용할 수 있다.
let shirts = {
    productName: "베이직셔츠"
};

let { productName: productName2 = "어떤 상품", color: color2 = "어떤 색상", price: price2 = 0 } = shirts;

console.log(`productName2 : ${productName2}`);
console.log(`color2 :  ${color2}`);
console.log(`price2 : ${price2}`);

// 프로퍼티가 많은 복잡한 객체에서 원하는 정보만 뽑아오는 것도 가능하다.
let pants = {
    productName: "배기팬츠",
    color: "검정색",
    price: 30000
};

let { productName: productName3 } = pants; // pants에서 productName만 변수로 뽑아내기
console.log(`productName3 : ${productName3}`);

// rest parameter ...로 나머지 요소를 한 번에 가져올 수도 있다.
// 단, 구버전 브라우저에서는 동작하지 않는다. 바벨을 사용해 동작 시킬 수 있다.

let { productName: productName4, ...rest } = pants;

console.log(`productName4 : ${productName4}`);
console.log(`rest.color : ${rest.color}`);
console.log(`rest.price : ${rest.price}`);

// let 없이 사용하는 예시
let productName5, color5, price5;

// {productName : productName5, color : color5, price : price5} = pants;    // 코드 블럭으로 인식해 오류가 발생한다.
({ productName: productName5, color: color5, price: price5 } = pants);     // 소괄호로 감싸주면 오류가 발생하지 않는다.

console.log(`productName5 : ${productName5}`);
console.log(`color5 :  ${color5}`);
console.log(`price5 : ${price5}`);
