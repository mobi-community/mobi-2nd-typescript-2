## TS-CONFIG.JSON

### ts-config 파일이란?

`tsconfig.json`파일은 TypeScript 컴파일러가 프로젝트를 어떻게 컴파일할지에 대한 설정을 제공하는 파일입니다.

### 왜 쓸까요?

매번 명령어에 옵션을 주기 힘들고 프로젝트 대한 다양한 설정을 중앙적으로 관리할 수 있습니다.

`tsconfig.json`을 사용하면 잘못된 코드를 작성하는 것을 방지합니다.

---

### tsconfig.json 사용하기

```json
// 타입스크립트 설치
npm i typescript -g
// tsconfig.json 파일 생성됨
tsc --init
// 파일 실행
ts-node [파일명]
```

### 컴파일 명령 실행

`tsc` 명령어 실행 시, TypeScript는 프로젝트 루트에서 `tsconfig.json` 파일을 찾아 컴파일 옵션을 적용합니다.

```
tsc
```

### 커맨드 라인 옵션 사용

`tsconfig.json` 파일을 사용하지 않고 직접 커맨드 라인에서 옵션을 지정할 수도 있습니다.

```
tsc --target es6 --module commonjs --strict
```

---

```
// tsconfig.json에 대한 fs를 역방향으로 검토하여 컴파일 실행
tsc

// 컴파일러 기본값으로 index.ts만 트랜스파일
tsc index.ts

// 기본 설정으로 src 폴더 안에 모든 .ts 파일을 트랜스파일
tsc src/*.ts

// tsconfig.json의 컴파일러 설정으로 src 폴더 안에 모든 .ts 파일을 트랜스파일
tsc --project tsconfig.json src/*.ts
```

#### 역할

<br />

---

<br />

# ts-config의 옵션들

### 최상위 속성

##### compilerOptions

- TypeScript 컴파일러의 옵션을 설정하는데 사용됩니다. 여러 가지 컴파일 옵션을 지정하여 TypeScript 프로젝트의 동작을 조절할 수 있습니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}
```

##### include & exclude

- `include`: 컴파일할 파일이나 디렉토리 패턴을 배열로 지정합니다.
- `exclude`: 제외할 파일이나 디렉토리 패턴을 배열로 지정합니다. 지정하지 않을 시 ["node_modules", "bower_components", "jspm_packages"]와 outDir에 지정한 경로가 기본값이 된다.

> `*`: 없거나 하나 이상의 문자열과 일치 (디렉터리 구분자 제외) </br> >`?`: 하나의 문자와 일치 (디렉터리 구분자 제외) </br> >`**/`: 단계에 관계없이 아무 디렉터리와 일치

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

##### files

- 원하는 파일만 tsc가 처리하도록 만들 수 있다.
- 이 속성 사용시 `include`와 `exclude`는 무시됩니다.

```json
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "system.ts",
    "types.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```

<br />

---

<br />

#### type checking

##### allowUnreachableCode

> 접근할 수 없는 코드가 있는 경우 경고를 표시합니다. </br>
> ex) `return`문, `throw`문, 혹은 무한 루프 등에 의해 이후의 코드가 실행될 수 없는 상황을 의미합니다.

##### allowUnusedLabels

##### alwaysStrict

##### exactOptionalPropertyTypes

##### noFallthroughCasesInSwitch

##### noImplicitAny

##### noImplicitOverride

##### noImplicitReturns

##### noImplicitThis

##### noPropertyAccessFromIndexSignature

##### noUncheckedIndexedAccess

##### noUnusedLocals

##### noUnusedParameters

##### strict

##### strictBindCallApply

##### strictFunctionTypes

##### strictNullChecks

##### strictPropertyInitialization

##### useUnknownInCatchVariables

<br />

---

<br />

#### modules

##### allowArbitraryExtensions

##### allowImportingTsExtensions

##### allowUmdGlobalAccess

##### baseUrl

##### customConditions

##### module

자바스크립트 파일간의 import 문법을 구현할 때의 문법을 결정하는 부분
commonjs로 설정 : require 문법 사용
es2015, esnext로 설정 : import 문법 사용

##### moduleResolution

##### moduleSuffixes

##### noResolve

##### paths

##### resolveJsonModule

##### resolvePackageJsonExports

##### resolvePackageJsonImports

##### rootDir

##### rootDirs

##### typeRoots

##### types

<br />

---

<br />

#### emit

##### declaration

declaration을 true로 설정하게 되면 해당 .ts 파일의 .d.ts 파일 또한 같이 출력물에 포함되게 된다. declaration 파일들만 따로 출력하게 하고 싶다면 declarationDir로 별도 지정해 줄 수 있다.

##### declarationDir

##### declarationMap

##### downlevelIteration

##### emitBOM

##### emitDeclarationOnly

emitDeclarationOnly가 true라면 출력물에 declaration 파일만 나오게 된다.
noEmit과 같이 사용할 수 없다.

##### importHelpers

##### importsNotUsedAsValues

##### inlineSourceMap

##### inlineSources

##### mapRoot

##### newLine

##### noEmit

noEmit을 true로 설정하면 최종결과물이 나오지 않게 된다.
이를 통해서 단순 타임 체크용으로 사용할 것인지 아니면 tsc를 컴파일용으로 사용할 것인지 지정할 수 있게 된다.

##### noEmitHelpers

##### noEmitOnError

##### outDir

files와 include를 통해서 선택된 파일들의 결과문이 저장되는 디렉터리를 outDir을 통해서 지정할 수 있다.
만약 타입 체크용으로 사용한다면 필요가 없다. 즉 컴파일 후 생성되는 js파일이 저장될 폴더 명을 입력하는 부분

##### outFile

이는 모든 파일을 하나의 파일로 합쳐서 출력할 경우 지정하는 파일명이다.
즉 단일 파일로 출력을 원하는 파일명을 입력하는 부분

##### preserveConstEnums

##### preserveValueImports

##### removeComments

##### sourceMap

sourceMap을 true로 지정하면 출력물에 .js.map 이나 .jsx.map 파일을 포함된다.
inlineSourceMap을 true을 지정하면 .js 파일 내부에 source map이 포한된다.
두 속성은 같이 사용할 수 없다.

##### sourceRoot

##### stripInternal

<br />

---

<br />

#### javascript support

##### allowJs

타입스크립트 컴파일 작업을 진행할 때 자바스크립트 파일도 포함될 수 있는지를 설정하는 부분
js 파일을 ts에서 import하여 쓸 수 있게하는 기능
자바스크립트 프로젝트에서 타입스크립트를 적용할 때 사용하면 좋은 속성

##### checkJs

js 요소가 존재하는지 확인하는 기능
allowJS를 설정하지 않으면 js를 허락하지 않는다는 의미이기에 allowJS가 true인 경우에만 설정을 해야 작동한다고 볼 수 있다.

##### maxNodeModuleJsDepth

<br />

---

<br />

#### editor support

##### disableSizeLimit

##### plugins

<br />

---

<br />

#### interop constraints

##### allowSyntheticDefaultImports

##### esModuleInterop

##### forceConsistentCasingInFileNames

##### isolatedModules

##### preserveSymlinks

##### verbatimModuleSyntax

<br />

---

<br />

#### backwards compatibility

##### charset

##### keyofStringsOnly

##### noImplicitUseStrict

##### noStrictGenericChecks

##### out

##### suppressExcessPropertyErrors

##### suppressImplicitAnyIndexErrors

<br />

---

<br />

#### language & environment

##### emitDecoratorMetadata

##### experimentalDecorators

##### jsx

##### jsxFactory

##### jsxFragmentFactory

##### jsxImportSource

##### lib

lib는 현재 프로젝트에서 사용할 수 있는 특정 기능에 대한 문법(타입)을 추가해준다.
설정하는 target에 따라서 기본으로 설정되는 lib가 달라진다.
타입스크립트 파일을 자바스크립트로 컴파일 할 때 포함될 라이브러리의 목록을 작성하는 부분

##### moduleDetection

##### noLib

##### reactNamespace

##### target

target을 통해서 tsc가 최종적으로 컴파일하는 결과물의 문법 형태를 결정할 수 있다.
기본 값은 "ES3"이다. 만약 "ES3" 자체에 없는 기능을 코드에 작성하면 컴파일러는 에러를 출력하게 된다.
target에 따라서 사용할 수 있는 기능이 제한될 수 있다는 것이다.

##### useDefineForClassFields

<br />

---

<br />

#### complier diagnostics

##### diagnostics

##### explainFiles

##### extendedDiagnostics

##### generateCpuProfile

##### listEmittedFiles

##### listFiles

##### traceResolution

<br />

---

<br />

#### projects

##### composite

##### disableReferencedProjectLoad

##### disableSolutionSearching

##### disableSourceOfProjectReferenceRedirect

##### incremental

##### tsBuildInfoFile

<br />

---

<br />

#### output formatting

##### noErrorTruncation,

##### preserveWatchOutput

##### pretty

<br />

---

<br />

#### Completeness

##### skipDefaultLibCheck

##### skipLibCheck

> 선언 파일의 유형 검사를 건너뜁니다.

<br />

---

<br />

#### Command Line

##### Watch Options

##### assumeChangesOnlyAffectDirectDependencies

<br />

---

#### Watch Options

<br />

#### Watch Options

##### watchFile

> 개별 파일을 감시하는 방법에 대한 전략입니다.

##### watchDirectory

> 재귀적 파일 감시 기능이 없는 시스템에서 전체 디렉토리 트리를 감시하는 방법에 대한 전략입니다.

##### fallbackPolling

> 파일 시스템 이벤트를 사용할 때 이 옵션은 시스템에 기본 파일 감시자가 부족하거나 기본 파일 감시자가 지원되지 않을 때 사용되는 폴링 전략을 지정합니다.

##### synchronousWatchDirectory

> 기본적으로 재귀 관찰을 지원하지 않는 플랫폼에서 콜백을 동기식으로 호출하고 디렉터리 감시자의 상태를 업데이트합니다. 파일에서 잠재적으로 여러 편집이 발생할 수 있도록 작은 시간 초과를 제공하는 대신.

##### excludeDirectories

> excludeFiles를 사용하면 감시되는 파일 수를 대폭 줄일 수 있습니다 --watch.
> 이는 TypeScript가 Linux에서 추적하는 열린 파일 수를 줄이는 유용한 방법이 될 수 있습니다.

##### excludeFiles

> excludeFiles감시되는 파일에서 특정 파일 세트를 제거하는 데 사용할 수 있습니다 .
> <br />

---

<br />

#### typeAcquisition

##### enable

> JavaScript 프로젝트에서 자동 유형 획득을 비활성화합니다.

##### include

> includeDefinedTyped에서 사용해야 하는 유형을 지정하는 데 사용할 수 있습니다 .

##### exclude

> JavaScript 프로젝트의 특정 모듈에 대한 유형 획득을 비활성화하기 위한 구성을 제공합니다. 이는 기본 애플리케이션에 필요하지 않은 테스트 인프라에 다른 라이브러리를 포함하는 프로젝트에 유용할 수 있습니다.

##### disableFilenameBasedTypeAcquisition

> TypeScript의 유형 획득은 프로젝트의 파일 이름을 기반으로 어떤 유형을 추가해야 하는지 추론할 수 있습니다. 이는 jquery.js프로젝트와 같은 파일이 있으면 확실히 Typed에서 JQuery 유형을 자동으로 다운로드한다는 의미입니다.
> disableFilenameBasedTypeAcquisition를 통해 이를 비활성화할 수 있습니다

<br />

---

<br />
