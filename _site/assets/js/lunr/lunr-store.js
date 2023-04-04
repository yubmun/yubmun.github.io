var store = [{
        "title": "작성해보는 첫 게시글!",
        "excerpt":"깃 블로그 어렵지 않다   Hello world, this is my first Jekyll blog post.   I hope you like it!  ","categories": ["practice"],
        "tags": [],
        "url": "/practice/first/",
        "teaser": null
      },{
        "title": "카테고리 설정!",
        "excerpt":"카테고리를 설정해봅니다.   목차에서는 어떻게 표시가 되는가?   카테고리 설정이 되겠쥬?  ","categories": ["practice"],
        "tags": ["typescript"],
        "url": "/practice/practice/",
        "teaser": null
      },{
        "title": "브라우저 렌더링 과정",
        "excerpt":"브라우저 렌더링 과정에 대해 우리가 작성한 코드들, HTML , CSS , JavaScript 코드들이 어떻게 렌더링이 되는지에 대해 공부했다. 개발자라면 알아야 하는 내용이며 어렵지 않게 이해할 수 있었다. 자, 그럼 단계에 대해서 알아보자. 1. HTML 파일을 파싱하고 DOM 트리를 구축한다. 여기서 DOM은, Document Object Model의 약자로 HTML 파일과 Script 언어들을 연결시켜줄...","categories": ["cs"],
        "tags": ["cs"],
        "url": "/cs/browserRendering/",
        "teaser": null
      },{
        "title": "rest parameter, object자료형의 파라미터",
        "excerpt":"이전 강의에서 진행했던 예제였던 것중에 중요했던 개념이다. rest parameter rest parameter와 object 자료형의 파라미터는, 구조분해 할당에 대한 이해와 spread 문법에 대해 아는 것부터 필요하다. let arr1 = [1,2,3] let [숫자1, 숫자2, 숫자3] = arr1; console.log(숫자1) // 1 console.log(숫자2) // 2 console.log(숫자3) // 3 구조분해할당의 가장 기초적인 개념이다. 선언된 [숫자1, 숫자2,...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/typescriptStudy/",
        "teaser": null
      },{
        "title": "class 필드값에 쓰이는 키워드들",
        "excerpt":"public , static 키워드 class 문법을 사용하면 자주 보게 될 키워드들이다. 원하는 필드값 좌측에 public 을 써주면, 그 속성은 어디서나 쓰일 수 있다. (현재 사용한 클래스, 자식클래스 등등) public을 쓰지 않아도, public을 쓴것과 똑같이 동작하는 이유는, 생략이 되어있기 때문이라고 한다. class Junyub { public name: string; public age: number; constructor(name:...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/typescriptStudy/",
        "teaser": null
      },{
        "title": "Generic 타입에 대한 이해",
        "excerpt":"Generic 타입은? 지정해주는 type을 파라미터 처럼 사용하는 문법이다. 그 타입은 &lt;&gt; 괄호 안에 넣어주면 된다. function 함수(x: unknown[]) { return x[0]; } let result = 함수([4,2]); console.log(result); console.log(result + 1); // error 콘솔에 result 를 찍어보면, 4가 출력된다. 단, result의 타입은 number가 아닌 unknown으로 나온다. 타입스크립트에서 타입을 알아서 변경해주지 않기...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/typescriptStudy/",
        "teaser": null
      },{
        "title": "tuple type, declare, d.ts파일?",
        "excerpt":"tuple type ..? object 자료형의 타입을 지정해줄 때, let obj: { age: number, name: string } = { age: 20, name: \"kim\" } 이런식으로 타입을 지정해줬다. 물론 type alias를 사용하거나 interface로 지정한다음 사용했던게 더 깔끔하긴 했다. array의 자료형에도 object자료형 같이 들어올 타입을 지정해줄 수 있다. (물론 array 도 object 자료형이라고...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/typescriptStudy/",
        "teaser": null
      },{
        "title": "index signatures, keyof연산자, infer?",
        "excerpt":"index signatures 너무 많은 프로퍼티, 속성값들을 통일시켜야 할 때 index signatures 문법을 사용할 수 있다. 예를들면 object 자료형에 모든 속성 값들이 string 타입을 가져야 한다고 가정했을 때 let junyub: { name: string, age: string } : { name: \"junyub\", age: \"30\" } 이런식으로, 프로퍼티의 이름과 타입을 작성하여 타입지정이 이루어졌는데 name,...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/typescriptStudy/",
        "teaser": null
      },{
        "title": "나만보기 편한 redux 요약",
        "excerpt":"Redux는 props drilling을 피하고 전역 상태관리를 위한 라이브러리이다. 사용 방법에 대해 여러 블로그와 공식문서를 참고하여 연습해봤다. 사용 방법 1. Action 을 만든다. useState를 쓰지 않는 Redux에서는 프로퍼티로 type이 들어가는 객체를 선언해야 한다. const junyub = { type: \"JUNYUB\" }; action을 만드는데에는 두가지방법이 있다. 위처럼 object 자료형을 선언하는 방법과, 액션생성 함수를...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/redux/",
        "teaser": null
      },{
        "title": "var, let, const의 차이?",
        "excerpt":"어떤 차이가 있나? var 변수 재선언과 재할당 모두 가능하며, 호이스팅이 일어난다. 함수 스코프를 가지고 있으며 ES5까지 사용되었다. var a = 'test'; var a = 'test2'; // 동일한 변수명으로 선언해도 에러가 나지 않는다. c = 'test' var c; // 호이스팅으로 인해 레퍼런스 에러가 발생하지 않는다. let 변수 재선언은 불가능하고, 재할당은 가능하다....","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "/javascript/TimeSpace/",
        "teaser": null
      },{
        "title": "SPA, CSR, SSR에 대하여",
        "excerpt":"SPA Single Page Application의 약자로, 최초 한번 페이지를 전체 로딩한 후 부터 데이터만 변경해서 사용할 수 있는 웹 애플리케이션을 말한다. 장점으로는, 하나의 페이지로만 구성이 되어있기 때문에 페이지가 달라지며 발생하는 화면 깜빡임 현상이 없다. 단점으로는, 시멘틱한 마크업으로 작성해도 검색엔진에 노출이 되지 않는다는 점이 있다. CSR Client Side Rendering 의 약자로 최초...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "/javascript/spa/",
        "teaser": null
      },{
        "title": "퍼블리셔 면접 후기",
        "excerpt":"면접 보고 온 후기 국민취업제도에서의 상담을 통해 일경험 프로그램이 있다는 사실을 알게 되었고, 연계를 통해 이력서를 넣고 면접을 보게 되었다. 지원한 직무는 웹 퍼블리셔 직무였고 주로 다루는 기술은 HTML, CSS, JS 등 이었다. 프론트엔드 개발자로 성장하기 위해 실무에 빨리 뛰어들고 싶은 마음이 컸기에 망설임 없이 달려갔다. 면접은 1분 자기소개, 이력서를...","categories": ["daily"],
        "tags": ["daily"],
        "url": "/daily/publisher/",
        "teaser": null
      },{
        "title": "border겹침 현상이 있다면?",
        "excerpt":"table을 태그를 써서 border값을 줬더니, border겹침 현상이 일어났다. 이럴땐 border-collapse: collapse; 속성을 주면 해결 된다. 간격을 넓히고 싶다면, border-collapse: sepearate; 주면 된다. &lt;table&gt; &lt;th&gt;가나다라&lt;/th&gt; &lt;tr&gt; &lt;td&gt;마바사&lt;/td&gt; &lt;td&gt;아자차&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; th { border-top: 1px solid black; border-left: 1px solid red; border-right: 1px solid red; } 이런식으로 작성이 되어 있으면, border-left와 right...","categories": ["css"],
        "tags": ["css"],
        "url": "/css/bordercollapse/",
        "teaser": null
      }]
