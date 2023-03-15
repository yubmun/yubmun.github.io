---
title:  "tuple type, declare, d.ts파일?"
categories: typescript
tag: typescript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# tuple type ..?

object 자료형의 타입을 지정해줄 때,

```tsx
let obj: { age: number, name: string } = { age: 20, name: "kim" }
```

이런식으로 타입을 지정해줬다. 물론 type alias를 사용하거나 interface로 지정한다음 사용했던게 더 깔끔하긴 했다.

array의 자료형에도 object자료형 같이 들어올 타입을 지정해줄 수 있다. (물론 array 도 object 자료형이라고 볼 수도 있지만)

```tsx
let arr: [string, number] = ["123", 123];
```

작성은 위와같이 하며, union type, optional 기호도 작성할 수 있다.

단, optional 기호는 맨뒤에 작성해주는 것이 룰이며, 중간에 끼면 말도안된다고 한다.

### spread 문법으로 index에 들어온다면 tuple type을 어떻게 지정해주나?

```tsx
let arr: number[] = [1,2,3];
let arr2: [number, ...number[]] = [4,5, ...arr];
```

arr2의 tuple type을 저렇게 지정해줘야, 두번째 index가 spread 문법이 활용된 배열(?) 이 인덱스로 받아질 수 있다.

함수에서 마찬가지로 rest parameter 에도 동일하게 적용시킬 수 있겠다.

```tsx
function junyub (...x: [number, string, ...number[]]) {
  
}
```

이런식으로, rest parameter의 타입도 tuple type으로 지정이 가능하다.

이러면 파라미터 자리에, 0번째 index가 number, 1번째 index가 string, 2번째 index부터는 쭈우우우우욱 모두 number 타입이 적용된다.

# declare 키워드

외부 라이브러리를 사용할때나, 작업했던 js 파일을 ts파일에서 사용한다면 타입지정이 안되어있어서 많은 오류들이 발생한다.

그럴때, js파일에 정의되어 있는 변수들을 사용하고싶을 때 쓰는게 declare 키워드이다.

이 declare 키워드는, tsc -w 로 js 파일로 변환할때 직접적으로 쓰여지는건 없다. 컴파일을 진행할때 컴파일러한테 힌트를 주는 코드라서 그렇다고 한다.

js 파일에서 정의된 변수들을 ts파일에서 활용하고 싶다면 declare 키워드를 써서 재정의 한 후에 사용하자.

### ts 파일에서의 특징

ts파일에 정의된 변수들을 쓸 때는, declare 쓸 필요 없이 import export 문법 잘 써주면 된다.

근데 같은 경로에 있는 파일이라면, import export를 쓰지 않아도 변수를 갖고와서 쓸 수 있다.

그 이유가 ts 파일에서 정의된 애들은 다 global 변수 취급을 받기 때문이다.

이걸 전문용어로 `ambient module` 이라고 한다.

근데, import export 문법이 쓰인 파일에서는, ambient module이 적용되지 않는다. import export 문법이 쓰이면 자동으로 로컬모듈로 바뀌게 된다.

작업하고 있는 ts파일이 다른 파일에 영향끼치는걸 막고싶으면 export{} 를 코드에 추가해주면, 로컬모듈로 전환되니깐 그렇게 쓰면 된다.

그렇게 export{} 코드 추가해주고 쓰다가 글로벌로 써주고 싶다면?

```tsx
declare global{
  type Junyub = string;
}
```

이렇게 declare 키워드를 붙여서 글로벌로 만들어줄 수 있다.

전에 배웠던 namespace 키워드라고 생각해도 된다고 한다. 로컬모듈에서 전역변수를 선언하는 방법이라고 생각하면 되겠다.

# d.ts 파일?

두가지 역할을 한다.

1. 타입정의만 하고 import 해서 쓰는 파일으로 쓰거나
2. 타입을 쭉 정리해놓는 레퍼런스로만 쓰거나

1번의 역할을 할때엔, d.ts 파일이 그냥 ts파일과는 차이가 있어서, export 를 쓰지 않으면 전역변수처럼 쓰일 수 없다. ,, import export 문법을 활용해서 써야 한다.

2번의 역할을 할 때엔 tsconfig.json 파일에다

```tsx
{
  {
    "compilerOptions": {
      ...
      "declaration": true,
    }
  }
}
```

declaration: true 속성을 추가해주면 자동으로 ts 파일에 정의한 변수, 타입들이 모두 d.ts파일에 작성된다.

import export 없이 d.ts 파일을 글로벌 모듈로 만들고싶다면?

마찬가지로 tsconfig.json 파일에 속성을 추가해주면 된다.

```tsx
{
  {
    "compilerOptions": {
      ...
      "declaration": true,
      "typeRoots": ["파일경로"],
    }
  }
}
```

이렇게 쓰는것 보단, import export 문법으로 사용하는게 더 안전하다고 한다.

유명한 라이브러리들은 d.ts 파일에 정의해둬서 타입스크립트 프로젝트를 진행할때 타입지정해주기 용이하다고 한다. 예를들면 jQuery 같은

타스 공홈에서 라이브러리 이름을 검색하면 d.ts 파일을 다운받을 수 있으며, 너무나도 대표적인것들은 npm에서 제공하니깐 터미널에서 다운받을수도 있다.