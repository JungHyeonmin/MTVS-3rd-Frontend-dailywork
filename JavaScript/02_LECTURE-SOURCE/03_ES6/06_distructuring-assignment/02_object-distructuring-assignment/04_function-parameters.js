// 04. fucntion parameters
// 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에 활용된다.

// function displayProduct(producer = "아무개", width = 0, height = 0, items = [] ) {}
// 위와 같은 함수는 넘겨주는 인수의 순서가 고정되어 있어 순서가 바뀌면 문제가 생기고 기본 값 사용 시에도 undefined를 이용해서 인수를 넘겨줘야만 한다.
// ex) displayProduct("신사임당", undefined, undefined, ["Coffee", "Donut"]);

// 구조 분해 할당을 이용하면 문제점이 해결 된다.
function displayProduct({ producer = "아무개", width = 10, height = 20, items = [] }) {
    console.log(`${producer} ${width} ${height}`);
    console.log(items);
}

// 함수에 전달할 객체
let exampleProduct = {
    items: ["Coffee", "Donut"],
    producer: "신사임당"
};

// 순서도 무관하고 기본 값 활용 시에도 별도의 처리가 불필요하다.
displayProduct(exampleProduct);