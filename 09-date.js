// Date : 날짜, 시간을 다루는 내장 객체
// 월 정보는 0부터 시작

let now = new Date(); // 현재 시간
console.log("현재 시간:", now);
//GMT표준시간으로 나옴 + 9시간 =서울 

let time = new Date(2024, 5 - 1, 27);   //년 , 월(0부터 시작), 일
console.log("년월일:",time);

time = new Date(2012, 8, 24, 13, 30, 0); // 년월일시분초
console.log("년월일시분초:", time);

// 년, 월, 일, 요일, 시, 분, 초, 밀리세컨드
// getter와 setter
console.log("현재 시간:", now);
console.log("년도: ", now.getFullYear());
console.log("월:", now.getMonth() + 1 ); // 월 정보는 0부터
console.log("일:", now.getDate());
console.log("요일:", now.getDay()); // 일요일 : 0

console.log(now.getHours(),
             now.getMinutes(), 
             now.getSeconds(),
             now.getMilliseconds());