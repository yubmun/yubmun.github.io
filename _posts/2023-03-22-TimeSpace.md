---
title:  "var, let, const의 차이?"
categories: javascript
tag: javascript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# 어떤 차이가 있나?

### var
변수 재선언과 재할당 모두 가능하며, 호이스팅이 일어난다.

함수 스코프를 가지고 있으며 ES5까지 사용되었다.
```js
var a = 'test';
var a = 'test2';
// 동일한 변수명으로 선언해도 에러가 나지 않는다.

c = 'test'
var c;
// 호이스팅으로 인해 레퍼런스 에러가 발생하지 않는다.
```

### let
변수 재선언은 불가능하고, 재할당은 가능하다.
```js
let a = 'test';
let a = 'test2'; // Syntax에러

let abc;
abc = 'apple';
// 할당을 선언 뒤에 해도 문제되지 않음.
```

### const
변수 재선언, 재할당 모두 불가능.

선언과 동시에 값을 할당해야만 함.

단, object자료형일 때 재할당에 대해 헷갈릴 수는 있다.
```js
const a = 'test';

const a; // error
```
