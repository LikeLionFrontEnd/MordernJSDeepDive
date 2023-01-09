var x = 1;
if (true) {
  var x = 2;
  // var 키워드로 선언된 변수는 함수 레벨 스코프를 따른다.
  // 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되어도 전역변수이다.
  // 따라서 이 if문 안에서 선언된 x는 전역 변수 x를 재할당하게 된다.
}

console.log(x); // 2. 코드 블럭 밖에서 콘솔을 찍었지만, 블록 스코프를 무시하기 때문에 모두 다 같은 전역변수로 취급해버린다.