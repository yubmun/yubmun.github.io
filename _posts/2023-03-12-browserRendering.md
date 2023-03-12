---
title:  "브라우저 렌더링 과정"
categories: cs
tag: cs
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

# 브라우저 렌더링 과정에 대해

우리가 작성한 코드들, HTML , CSS , JavaScript 코드들이 어떻게 렌더링이 되는지에 대해 공부했다.

개발자라면 알아야 하는 내용이며 어렵지 않게 이해할 수 있었다.

자, 그럼 단계에 대해서 알아보자.

### 1. HTML 파일을 파싱하고 DOM 트리를 구축한다.

여기서 DOM은, Document Object Model의 약자로 HTML 파일과 Script 언어들을 연결시켜줄 때 필요한 모델에 대한 내용이다.
우리가 JavaScript 파일에서 HTML 파일에 있는 요소들을 불러올때 Document.querySelector 뭐 이런거로 불러올 때, 쓰이는 Document객체가 바로 DOM 객체이다.

### 2. CSS 파일을 파싱하고 CSSOM 트리를 구축한다.

CSS Object Model 의 약자인 CSSOM, DOM처럼 CSS의 내용을 해석하고 노드를 만들어 트리구조로 만든다.

### 3. JavaScript를 실행한다.

주의할 점은, HTML 파일 중간에 스크립트가 들어가있으면 HTML 파싱이 중단이 된다는 점이다.

때문에 script를 src 속성을 통해 HTML 파일에 연결할때, `<body>` 태그의 가장 끝에다가 몰아서 두는 것이다.

### 4. DOM 과 CSSOM 트리를 조합해서 렌더 트리를 구축한다.

이때, `display: none;` 과 같은 속성들은 렌더트리에 포함되지 않는다.

### 5. ViewPort 를 기준으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기를 계산한다.

### 6. 계산된 위치와 크기를 기반으로 화면에 그린다 (Paint 과정)

<hr>

1. HTML 파일을 파싱하여 DOM 트리를 구축한다.
2. CSS 파일을 파싱하여 CSSOM 트리를 구축한다.
3. JS 파일을 실행한다.
4. DOM 트리와 CSSOM 트리를 합쳐서 렌더트리를 구축한다.
5. ViewPort를 기준으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기를 계산한다.
6. 계산된 위치, 크기를 조정하여 화면에 그린다.