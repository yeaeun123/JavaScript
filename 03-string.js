// String
const s1 = "Modern JavaScript and Java"; // 리터럴 생성
const s2 = String("Modern JavaScript and Java"); //타입 함수 이용한 생성

console.log(typeof s1, typeof s2);  //string string

// .length : 문자열 길이 확인하는 속성
console.log("String : ", s1, ", length : ", s1.length); //26글자


// 문자열 추출 메서드
console.log(s1.charAt(7)); // J 출력->charAt (index(0부터시작) 7번째 글자 추출)
// 특정 인덱스에 위치한 문자 추출 :charAt

// ES는 문자열도 배열처럼 활용
console.log(s1[7]); // J 출력

console.log(s1.substr(7, 10)); // JavaScript 출력 
// 7번 인덱스부터 10개 문자 추출  -> deprecated 

console.log(s1.substring(7, 17)); //JavaScript 출력 
// 7번 인덱스부터 17번 인덱스까지 추출 

console.log(s1.substring(7)); //JavaScript and Java 출력 
// 7번 인덱스부터 끝까지 추출


// 문자열 검색(중요)
let position;
position = s1.indexOf("Java");  // 첫번째 검색되는 위치 
console.log("1st serch: ",position); // 7 출력
position += 4;  //position의 위치를 +4 해서 11부터 찾도록 세팅
position = s1.indexOf("Java", position);    // indexOf(검색어, 검색시작위치)
console.log("2nd serch :" , position);  //22 출력

console.log("No keyword: ",s1.indexOf("java"));    // -1 출력 (찾는 검색어 없을때)
// -> 대소문자 구분해야함

console.log("lastIndexOf: ", s1.indexOf("Script")); // 11 출력
// 검색 방향 => 뒤에서부터 찾음


// 문자열 치환
console.log(s1.replace("JavaScript", "JS")); // replace(검색어, 바꿀문자열)
// Modern JS and Java 출력
console.log(s1); // 내부 데이터 변경하는 것이 아니라 변경된 문자열을 새로 생성 후 반환
// Modern JavaScript and Java 출력

// 변경 데이터를 뒤에서도 사용하고자 한다면 재할당 후 사용가능
const s1_changed = s1.replace("JavaScript", "JS"); //s1의 JavaScript를 JS로 변경한 결과를 재할당
console.log(s1, ", ", s1_changed); // 별도의 변수 사용해야함

// 화이트 스페이스(공백, 탭, 개행 등) 제거 
console.log("        Hello            ".trim()); //.trim() 화이트 스페이스 제거

// ES string 보충
// 이스케이프 -> 키보드로 입력 불가하거나 특수한 의미를 가진 문자 (\로 표기)
//   \n : 개행
//   \t : 탭
//   \' : '
//   \" : "
//   \` : 백틱(여러 줄 문자열 쓸 수 있음)
//   \$ : 템플릿 문자 

let message = 'He said, "Hello"';
console.log(message);
message = "He said, \"Hello\"";
console.log(message);

message = "I'm going";
console.log(message);
message = 'I\'m going';
console.log(message);

// 여러 줄 문자열
message = "예전에는 \n"+
            "여러 줄 문자열을 만드는 것이 \n"+
            "쉽지 않았습니다.";
message = "예전에는 \n여러 줄 문자열을 만드는 것이 \n쉽지 않았습니다.\n"; 
console.log(message);


message = `하지만 ES6 이상에서는
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);


