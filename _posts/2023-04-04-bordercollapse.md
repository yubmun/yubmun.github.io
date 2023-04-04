---
title:  "border겹침 현상이 있다면?"
categories: css
tag: css
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

## table을 태그를 써서 border값을 줬더니, border겹침 현상이 일어났다.

이럴땐 `border-collapse: collapse;` 속성을 주면 해결 된다.

간격을 넓히고 싶다면, `border-collapse: sepearate;` 주면 된다.

```html
<table>
  <th>가나다라</th>
  <tr>
    <td>마바사</td>
    <td>아자차</td>
  </tr>
</table>
```

```css
th {
  border-top: 1px solid black;
  border-left: 1px solid red;
  border-right: 1px solid red;
}
```

이런식으로 작성이 되어 있으면, border-left와 right 부분만, top부분보다 위로 보여지게 되는 안타까운 현상이 발생하게 된다.

이럴때엔, `<th>` 태그 밑에 HTML 요소를 추가해서 border 겹침 현상을 해결할 수 있다.