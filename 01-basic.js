// 한 줄 주석
/*
    여러 줄 주석
    :주석의 사용 방법은 C와 동일
*/

// console 객체 : 출력 장치에 로그 레벨별로 로그를 출력하는 객체
// FATAL (심각)- ERROR (에러) - WARN (경고)- NORMAL (log, info), DEBUG(디버그)
console.info("정보 메세지 출력");
console.debug("디버그 메세지 출력");
console.log("일반 메세지");

console.warn("경고 메세지");
console.error("에러 메세지");

// 출력할 내용들을 ,로 구분해서 나열
console.log("String", 2024, true);

console.log(process.version, process.platform);
//npm install -g nodemon 터미널에 입력해서 설치 (파일 변경후 저장시 즉시 재실행해줌)
// nodemon +파일명으로 실행 가능
//ctrl+c로 종료가능

// ES(javascript)는 객체 기반 언어
// 객체 : 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//          .으로 내부 속성과 메서드에 접근할 수 있다.
console.log(Math.PI);   //속성
console.log(Math.max(1, 3, 2, 4, 6));   //메서드

console.log("----------------------");
// var : ES6 이전 -> 변수의 범위 등 일관성이 없음 
// let(가변데이터:mutable), const(불변데이터:immutable,상수)
var testvar;
testvar = "var";
let testlet;
testlet = "let";
// const testconst;
// testconst = "const"; //const는 불변데이터 -> 선언과 동시에 데이터를 할당해줘야 함
const testconst = "const";

console.log("var, let, const :" , testvar, testlet, testconst);

// 데이터 재할당
testvar = "var changed";
testlet = "let changed";
//testconst ="const changed"; //const는 재할당 불가!

// ES는 Dynamic Type Language
//      -> 데이터가 할당될 때 타입이 결정
//      -> 타입과 무관하게 어떤 객체든 할당됨

// 특정 연산 작업 수행 이전에 데이터 타입을 체크해야 할 필요가 있을 수 있다.
//  -> typeof 연산자 
let v = "This is String";
console.log(v, "->", typeof v);
v = 2024;
console.log(v, "->", typeof v);
v = 10 > 8;
console.log("10 > 8 ? ", v, "->", typeof v);

