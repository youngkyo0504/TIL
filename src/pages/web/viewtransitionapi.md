---
title: " View Transition API"
full_path: "src/pages/web/viewtransitionapi.md"
---

힘들게 구현했던 [FLIP](https://www.youtube.com/watch?v=8q_05PUYv1o&ab_channel=ChromeforDevelopers) 애니메이션을 `ViewTransition API`덕분에 브라우저 기본 API로 구현이 가능해졌다. 하지만 언제쯤 실무에서 쓸 수 있을지 모르겠다. 그때쯤이면 AI가 세상을 지배하지 않았을까?

기본 사용법 
`document.startViewTransition`에 콜백 함수를 넣어준다. 이전 스냅샷과 현재 스냅샷을 자연스럽게 이어준다. 기본 애니메이션 옵션은 `crossFade`다. `crossFade`를 설명하면 이전 스냅샷은 opacity 0 에서 1로 변하면서 사라지고, 현재 스냅샷은 opacity가 0~1로 변하면서 나타난다.

1. 0.5초 마다
2. 이전 snapshot을 만들고 
3. 새로운 snapshot으로 자연스레 교체

 
```ts
setInterval(() => {
  document.startViewTransition(() => {
    h1.textContent = word[index++]
    if (index >= word.length) index = 0
  })
}, 500)
```

css에서는 다음과 같이 이름을 정해주고 사라질 상태와 나타날 상태 애니메이션을 설정할 수 있다. 

```css
@media (prefers-reduced-motion: no-preference) {
  html::view-transition-old(replace-effect) {
    animation: 
      var(--animation-fade-out),
      var(--animation-scale-down);
  }
}

@media (prefers-reduced-motion: no-preference) {
  html::view-transition-new(replace-effect) {
    z-index: 1;
    animation: 
      var(--animation-fade-out) reverse,
      var(--animation-slide-in-up);
  }
}

```



[관련 영상](https://www.youtube.com/watch?v=N2BKAKwGP6M&ab_channel=ChromeforDevelopers) 
[관련 블로그](https://nerdy.dev/text-replace-transitions)