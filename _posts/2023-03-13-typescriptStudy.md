---
title:  "class 필드값에 쓰이는 키워드들"
categories: typescript
tag: typescript
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# public , static 키워드

class 문법을 사용하면 자주 보게 될 키워드들이다.

원하는 필드값 좌측에 public 을 써주면, 그 속성은 어디서나 쓰일 수 있다. (현재 사용한 클래스, 자식클래스 등등)

public을 쓰지 않아도, public을 쓴것과 똑같이 동작하는 이유는, 생략이 되어있기 때문이라고 한다.

```tsx
class Junyub {
  public name: string;
  public age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

let 준엽 = new Junyub("이준엽", 30);
console.log(준엽.name); // "이준엽"
준엽.name = "김준엽";
console.log(준엽.name); // "김준엽"
```

public을 쓰든, 안쓰든, 위와 같은 코드들은 동일하게 class 외부에서 name 필드에 접근하여 값을 수정, 변경할 수 있을 것이다.

필드값을 외부에서 수정, 변경이 이루어지지 않게 하려면 `private` 키워드를 작성해야한다.

```tsx
class Junyub {
  private name: string;
  private age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  
  changeName(name: string){
    this.name = name;
  }
  chageAge(age: number){
    this.age = age;
  }
}

let 준엽 = new Junyub("이준엽", 30);
console.log(준엽.name); // "이준엽"
준엽.name = "김준엽"; // error
준엽.changeName("김준엽");
console.log(준엽.name); // "김준엽"
```

private 를 사용하면, 외부에서는 변경이 불가능하기에 필드값을 변경하려면 변경 함수를 만들어줘야 한다.

위와 같이 changeName() 함수를 만들어서 필드값을 변경해야만 된다.

## private, public 쓰면 필드값을 더 축약해서 쓸 수 있다

```tsx
class Junyub{
  constructor(public name: string, public age: number) {
    
  }
}
let 준엽 = new Junyub("준엽", 30);
console.log(준엽.name); // "준엽"
console.log(준엽.age); // 30
```

`this.name = name;` 과 같은 코드를 생성자 파라미터에 public을 붙여주면 생략할 수 있다는게 장점이다.

인스턴스를 생성할때 public 파라미터에 관련된 데이터를 입력하지 않으면 에러가 발생한다.

public도 되니깐, private 키워드도 물론 축약해서 사용이 가능하다. 앞서 작성했듯이, private로 필드값을 설정하면 변경 함수를 따로 만들어서 필드값이 변경된다는 것만 알아두자.

## class 안에서 쓰는 protected 키워드

protected 키워드도 있는데, 단어 자체로만 보면 보호해주는 느낌이다.

그럼, private이 있는데 뭣하러 쓰나 싶지만, 자식요소에도 필드값을 전달해주고 싶을 때 쓴다.

private은 범위가 클래스{} 안에서만 사용이 가능하기에, 자식요소에서는 접근이 안된다.

```tsx
class Junyub {
  constructor(private name: string, private age: number){

  }  
}

class Lee extends Junyub {
  this.name = "준엽" // error;
}
```

private가 아닌 protected 키워드를 쓰면 자식요소에서도 this.필드명으로 접근이 가능해진다.

```tsx
class Junyub {
  constructor(protected name: string, protected age: number){

  }  
}

class Lee extends Junyub {
  
  func(){
    return this.name = "준엽"
  }
}
let few = new Lee("이", 30);
console.log(few.func()); // "준엽"
```

## static 키워드

class를 통해 생성되는 인스턴스가 아님을 의미한다. 예를들면

```tsx
class Junyub {
  static name: string = "준엽";
}

let 가나 = new Junyub();
가나.name // 없는 값.
Junyub.name // "준엽"
```

Junyub이라는 class에 필드값으로 name이 선언되었지만, 인스턴스를 통해서 접근하는게 아니라, 선언한 클래스를 통해 접근할 수 있는 값에 static 키워드를 붙인다.

주로 자주 사용하는 상수, 변수 등에 사용한다고 한다.

### chatGPT에 static에 대해 물어본 결과
  타입스크립트에서 **`static`** 키워드는 클래스의 정적 멤버(static member)를 선언하는 데 사용됩니다. 정적 멤버는 클래스 자체와 연관되어 있으며, 클래스의 인스턴스가 생성되기 전에 사용할 수 있습니다. 이는 클래스의 인스턴스와는 별개로 존재하는 멤버이므로, 클래스를 생성하지 않고도 직접 호출할 수 있습니다.

**`static`** 키워드를 사용하여 선언된 정적 멤버는 클래스 이름으로 접근할 수 있습니다. 예를 들어, 다음과 같이 정적 메서드를 선언할 수 있습니다.

```tsx
typescriptCopy code
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method.');
  }
}

MyClass.myStaticMethod(); // 'This is a static method.' 출력

```

정적 멤버로는 메서드 외에도 정적 변수(static variable)를 선언할 수 있습니다. 이 변수는 클래스의 인스턴스마다 개별적으로 존재하는 인스턴스 변수와는 달리 클래스 전체에서 공유되는 변수입니다.

```tsx
typescriptCopy code
class MyClass {
  static myStaticVariable: string = 'This is a static variable.';
}

console.log(MyClass.myStaticVariable); // 'This is a static variable.' 출력

```

정적 멤버는 클래스의 인스턴스와는 별개로 동작하기 때문에, 클래스 메서드 내에서 정적 멤버에 접근하기 위해서는 **`this`** 대신 클래스 이름을 사용해야 합니다.

```tsx
typescriptCopy code
class MyClass {
  static myStaticVariable: string = 'This is a static variable.';

  static myStaticMethod() {
    console.log(`The static variable is: ${MyClass.myStaticVariable}`);
  }
}

MyClass.myStaticMethod(); // 'The static variable is: This is a static variable.' 출력

```

정적 멤버는 클래스에서 자주 사용되는 상수, 유틸리티 함수, 팩토리 메서드 등을 구현할 때 유용합니다.