// 함수 선언문

// 선언
function sum(a, b){     // function 함수이름(매개변수 목록)
    return a + b;
}

// 호출
console.log(sum(10, 20));   // 30 출력

// 함수 표현식 -> 익명 함수
// 함수도 객체다. (1급 시민이다.)
//      -> 다른 객체들과 동등한 권리와 지위를 가진다.
//      -> 변수에 할당될 수 있다.
//      -> 다른 함수의 매개변수로 전달될 수 있다.
const asum = function(a, b){
    console.log(typeof a, typeof b);    // undefined, undefined 출력(선언ㅇ,할당x)
    return a + b;
}
console.log(typeof asum);   // function 출력
console.log(asum(10, 20));  // 30 출력

// 함수의 매개변수의 이해
// ES의 함수는 선언부에 선언된 매개변수의 갯수와 맞지 않게 호출해도 괜찮다.
console.log(asum());    //NaN 출력(Not a Number)

// 매개변수가 없는 함수 
function getNumberTotal(){
    // ES 특성상 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달된다.
    // console.log("arguments : ", arguments);
    //arguments :  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } 출력

    // 전달받은 매개변수 전체를 합산
    let result = 0;

    for (let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "number"){   // 매개변수의 타입이 숫자일 때만 합산
        result += arguments[i];
    } 
}
    return result;  
}
console.log(getNumberTotal(1, 2, 3, 4, 5)); // 15 출력 1+2+3+4+5
console.log(getNumberTotal(1, 2, "3", 4, 5)); // 12 출력 1+2+4+5

// 함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달될 수 있다.
function calculator(a, b, func){    // func -> 계산식 함수
    if(typeof func === "function"){
        console.log(func(a, b));
    } else {
        console.log("어쩌라구");
    }
}

calculator(10, 20); //어쩌라구 출력
calculator(10, 20, function(v1, v2) {
    return v1 + v2;                     // 30 출력
}); 

// 함수 보충
console.log("======================== 화살표 표기법"); // 매개변수 목록 => 구현 내용

const f1 = function(){
    return "hello";
}       // 매개변수 x , 리턴 ㅇ
console.log(f1());  // hello 출력

// 매개변수 목록 => 구현 내용
const f1_arrow = () => "hello";
console.log(f1_arrow());    // hello 출력 

const f2 = function(name){
    return "Hello, " + name;
}       // 매개변수 ㅇ, 리턴 ㅇ
console.log(f2("홍길동"));  // Hello, 홍길동 출력

const f2_arrow = name => "Hello, " + name;  // 매개변수 1개일 경우 () 생략가능
console.log(f2_arrow("홍길동"));    // Hello, 홍길동 출력

const f3 = function(a, b){
    return a + b;
}
console.log(f3(10, 20));    // 30 출력

const f3_arrow = (a, b) =>{ 
    // 여러 개의 로직 수행할 때 -> 블록 ({})을 잡을 수 있다.
    // 블록이 잡히면 return 문을 생략할 수 없다.
    console.log("화살표 함수");
    return a + b;
} 
console.log(f3_arrow(10, 20));  // 30출력 

// 콜백 함수에 화살표 함수로 계산식 정의
calculator(10, 20, (v1, v2) => v1 + v2);    // 30출력 
calculator(10, 20, (v1, v2) => v1 * v2);    // 200 출력

// 콜백 함수 활용 -> Array 추가 강의