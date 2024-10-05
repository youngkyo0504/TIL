---
title: "Corepack이란 "
full_path: "pages/corepack.md"
---


# Corepack이란

> experimental tool to help with managing versions of your package managers.

Corepack은 패키지매니저의 버전을 관리하는 도구입니다. 

`corepack enable` 과 `corepack disable` 로  on off 할 수 있습니다. 

`corepack enable` 을 실행하면 corepack의 shim이 활성화됩니다. 

> shim이란 무엇일까요? 

shim은 소프트웨어에서 API 콜을 가로채서 다른 기능을 추가하는 코드를 말합니다. 새로운 시스템에서 예전 API를 지원할 때 혹은 크로스 플랫폼 호환성을 위해 사용합니다. Corepack에서 Shim은 다음과 같이 동작합니다. 

*   yarn이나 pnpm 명령어를 실행하면 package.json에 명시된 패키지 매니저와 그 버전이 맞는지 확인합니다.

주의할점은 npm에 대해서는 shim이 동작하지 않습니다. 명시적으로 `corepack npm` 명령어를 사용해야 합니다.  
( README에 보면 npm은 Node.js 와 함께 배포되기 때문이라고하네요. 아마 node버전과 npm은 함께 움직이기 때문인거 같기도 하네요. )

> This command will detect where Corepack is installed and will create shims next to it for each of the specified package managers (or all of them if the command is called without parameters). Note that the npm shims will not be installed unless explicitly requested, as npm is currently distributed with Node.js through other means.

[Corepack | Node.js v22.6.0 Documentation](https://nodejs.org/api/corepack.html#supported-package-managers)

---