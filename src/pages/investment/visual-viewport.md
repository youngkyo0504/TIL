---
title: "visual viewport API"
full_path: "src/pages/investment/visual-viewport.md"
---


> visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.

`visual viewport`는 쉽게 말해서 화면에 웹콘텐츠가 보여지는 부분을 뜻한다. 실제 눈에 보이는 스크린을 visual viewport라고 한다. 우리는 항상 `visual viewport`를 보고있다. 핀치줌을 하든, 확대를 하든,,, 

visual viewport는 layout viewport보다 작을 수 있다. layout viewport는 뭔데??? window객체(`document`)를 말하는 것이다. 

[visualViewport API](https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport)가 존재한다. 해당 API로 핀치줌이 발생했는지 여부를 알 수 있다. 

<img width="1263" alt="image" src="https://github.com/youngkyo0504/TIL/assets/78121870/4c268c24-34ce-4850-bc74-47cdd63ec643.png"/>



http://bokand.github.io/viewport/index.html
https://developer.mozilla.org/en-US/docs/Glossary/Visual_Viewport
https://www.youtube.com/watch?v=e6IjNW8OTv0