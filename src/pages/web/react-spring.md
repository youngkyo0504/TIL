---
title: "React-Spring"
full_path: "src/pages/web/react-spring.md"
---


spring애니메이션은 무엇일까? 직역하면 용수철 애니메이션.. "띠용"이라는 의성어가 떠오른다. spring애니메이션이 무조건 띠용하는 용수철애니메이션은 아니다. 사실 우리 일상의 거의 모든 물체들은 spring애니메이션을 가진다. 용수철애니메이션이 아니라 자연의 모습을 따른다고 볼 수 있다. 

react -spring을 알아보자. 

useSpring에 함수를 넣으면 springs와 api라는 두개의 변수를 내보낸다. 
springs는 변하는 실제 값이다. (예시에서는 x값)
api는 애니메이션을 시작 정지 할 수 있게해주는 객체다. 

```ts
import { useSpring, animated } from '@react-spring/web'

export default function MyComponent() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}
```

