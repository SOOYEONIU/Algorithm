# 첫 번째 코드리뷰 회고
---
내가 발표한 코드 : [day1_1157](https://github.com/SOOYEONIU/CodingTest/blob/main/Code/1week/day2_1157.js)

## 리뷰 과정
---
1. 간단한 문제 설명
  : 알파벳 대소문자로 된 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램 만드는 문제

2. 사용한 자료구조와 알고리즘
  : 사용한 자료구조는 배열과 해쉬 테이블이라는 자료구조 중 객체를 활용하였다.
  객체는 key값, value값으로 이루어져있는데, key값은 사용된 알파벳 문자를 value값에는 해당 알파벳 빈도수를 넣어 객체를 구성하였다.
  알고리즘으론 for-of / for-in 반복문을 사용하였다.

3. 코드 리뷰

## 리뷰 받은 내용
---
- for-in 반복문 안에 if조건문에서 strObject[strKey] == maxNum 이 true일 경우 maxValue = '?';가 실행되는데, 만약 이 단계를 거쳤다면 바로 break를 추가하여
  for-in문을 빠져나오도록 하는게 출력 시간을 단축시킬 수 있을 것 같다는 리뷰를 받았다.
-> but, 내가 설계한 로직 상에선 if문에 break;를 입력하면 안됐다.
  왜냐하면 예를 들어 'ABCABCCC'란 문자열이 있으면 { A: 2, B: 2, C: 4 } 이렇게 먼저 있는 문자 순서대로 객체에 저장해놓아서 만약 strObject[strKey] == maxNum이 같더라도 break하면 안 되고 다음 C의 개수를 계산해서 크면 else if 구문을 돌아야한다.
  문제 자체가 가장 많이 사용한 알파벳이 여러개인 경우 ?를 출력하는 거기 때문에 가장 많이 사용한 개수가 4이고 다른걸 4개 사용한 기록이 없으니 maxValue가 C를 담아 출력하게 되기 때문이다.

## 새로 알게 된 내용
---
- trim() 함수의 사용 이유?
  어떤 문자열에선 사용해야 오류가 안나고 어떤 문자열에선 사용하지 않아도 오류가 났다. 그 이유를 다같이 생각해보았다.
  [블로그 정리](https://sootech-story.tistory.com/12)

## 회고
---
처음으로 백준 알고리즘 문제를 풀면서 코드 리뷰하였다. 같이 취업 준비하고, 알고리즘 공부하는 개발자들의 코드를 함께 리뷰하고 서로 개선점, 궁금한 점을 함께 이야기하며 흥미롭기도 하고 배울점이 많았다. 그리고 내가 겪었던 어려움을 다른 개발자분들도 겪었다고 말하면서 공감이 되는 부분도 있었다. 리뷰할 때 팀원들에게 틀린 부분을 잘 못 전달하고, 설명이 어려워지는 부분이 있을까봐 헷갈렸던 부분에 대해 다시 한번 찾아보면서 개념 정리를 확실하게 할 수 있었다. 
스터디를 통해 다른 개발자들의 코드를 볼 수 있고, 미처 생각하지 못했던 부분을 알 수 있는 기회이기에 배울점 많은 시간이였다.