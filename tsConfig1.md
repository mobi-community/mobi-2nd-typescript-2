tsconfig 옵션
typescript는 javascript로 컴파일 할 때 tsconfig.json 에 적혀있는 옵션 속성을 바탕으로 컴파일 합니다.
`tsconfig`파일이 없어도 컴파일이 가능하나, 프로젝트의 통일성 등을 위해 설정하는 것이 기본입니다.

tsconfig를 통해 컴파일 옵션 외에도 다음과 같은 것을 할 수 있습니다.

## Compiler Options

### ✅ Top Level : 전체 파일, 컴파일 파일들의 구조, 컴파일 설정 파일을 등을 설정

#### include <br/>

=> ts가 컴파일할 때 해당 파일을 컴파일 대상에 포함시키거나, 제외할 파일들을 명시하는 속성
다음과 같이 와일드 카드를(\*) 사용해 해당 파일들을 명시할 수 있다.

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

#### exclude <br/>

include의 설정된 파일에 해당 하는 경우만 제외시킨다.

#### extends <br/>

=> 해당 `tsconfig.json` 외에 다른 컴파일 설정 파일을 추가할 수 있는 옵션

```json
//configs/base.json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}

//tsconfig.json
{
  "extends": "./configs/base",
  "files": [
    "main.ts",
    "supplemental.ts"
  ]
}
```

#### File

=> 컴파일러에 포함될 타입스크립트 파일의 리스트를 정의합니다. 경로는 절대 경로, 상대 경로
둘 다 가능합니다. 해당 파일이 없으면 오류가 발생합니다. 파일 수가 적어서 파일 참조에 glob을 사용할 필요가 없을 때 사용하며 필요한 경우 include를 사용합니다.

```json
{
  "files": ["program.ts", "sys.ts"]
}
```

### ✅ Type checking : 타입 체크 기능과 관련된 설정

### strict <br/>

타입 체크를 엄격하게 하여 정확도를 높인다.

밑은 strict과 관련된 옵션들이다.

#### strict - ⭐noImplictAny <br/>

true 이면, 타입이 표기되지 않아 타입을 표기할 수 없을 때 ts는 any 타입으로 대체하는데,
any로 추론될 때마다 오류를 발생시킴

#### strict - noImplictReturn <br/>

true 이면, 리턴값의 타입으로 잘 반환되었는지 검사를 꼼꼼히 수행함.

#### strict - alwaysStrict <br/>

파일을 strict하게 분석하고, 각 소스 파일에 "use strict"를 생성한다.

#### strict - ⭐️strictNullChecks <br/>

null과 undefined를 엄격하게 분리해서 검사한다. 다음과 같이 undefined가 나는 경우를
에러를 내보낼 수 있다.

```jsx
declare
const loggedInUsername: string;
const users = [
    {name: 'jin', age: 12},
    {name: 'loa', age: 32}
]

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age); //loggedInUser가 undefined일 경우가 있으므로 error
```

#### noUnusedLocals / noUnusedParameters <br/>

안쓰는 지역 변수 / 파라미터 에 대해 에러를 낸다

#### strictFunctionTypes <br/>

=> 함수 매개변수를 더 엄격하게 확인.

```jsx
function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}

type StringOrNumberFunc = (ns: string | number) => void;

//number의 경우 fn을 할당할 수 없습니다. 라는 오류가 올바르게 나옵니다.
let func: StringOrNumberFunc = fn;
```

### ✅ Modules

#### ⭐️path <br/>

=> 경로 별칭 등을 등록할 수 있다 .

```json
{
  "compilerOptions": {
    "paths": {
      "@utils/*": ["./src/common/utilities/*"],
      "@type/*": ["./src/type/*"],
      "@component/*": ["./src/*"]
    }
  }
}
```

위와 같이 설정하면 모듈을 import 할 때 해당 절대 경로로 import 할 수 있다. paths를
설정할 때 굳이 `baseUrl`을 또 설정할 필요는 없다.

#### ⭐baseUrl <br/>

규모가 크지 않은 프로젝트의 경우 위에 있는 path로 절대 경로를 설정할 필요까진 없다. 그럴 때 사용하는 것이 baseUrl을 사용해서 내부 모듈의 파일 위치를 적는 방법이다.
다음과 같이 보통 사용한다.

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

#### ⭐module <br/>

프로그램의 모듈 시스템을 설정한다. 노드 프로젝트에서는 'commonJs' 가, 최신 버전의 ES문법을 사용하려면 `esnext`를
사용하면 된다.

#### ⭐ resolveJsonModule <br/>

노드 프로젝트에서 일반적인 관행인 `.json`확장자를 사용해 모듈을 가져올 수 있다.

#### rootDir <br/>

ts 컴파일러에게 소스 코드 파일이 있는 최상위 디렉토리를 알려줌. 즉 프로젝트의 시작점이 되는
디렉토리를 지정함. 이 디렉토리 내의 모든 Ts 파일이 컴파일 대상이 됨.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

include와의 차이점 : rootDir는 루트 파일 지정, include는 개별 파일 지정
rootDir를 설정하지 않으면, include 패턴에 있는 파일들만 컴파일 대상으로 인식함.

#### typeRoots <br/>

=> 타입 정의를 포함할 폴더 목록을 지정한다. 기본적으로 ./node_modules/@types이다.
추가적으로 타입 정의시 별도의 type 디렉토리 생성 후 안에 `.d.ts`를 만들고 해당 디렉토리를 typeRoots 안에 추가하면 된다. <br/>
📌 다만, include에 포함되어 있는 .d.ts 파일은 자동으로 TS가 인식하므로 넣어주지 않아도 된다.
주로 외부 라이브러리 모듈의 타입을 정의하기 위해 사용한다.

#### types <br/>

=> 컴파일 중 포함될 타입 정의의 파일 목록을 작성한다.

### ✅ Emit : 컴파일되는 파일들에 대한 속성을 정의

#### ⭐ outDir <br/>

files와 include를 통해 선택된 파일들의 결과문이 출력되는 디렉토리를 설정할 수 있다.

```jsx
{
    "compilerOptions":
    {
        "outDir" : "dist"
    }
}
```

#### declaration <br/>

컴파일시 .d.ts 파일도 자동으로 함께 생성할지 여부. d.ts는 현재쓰는 모든 타입이 정의된 파일을 의미
https://www.daleseo.com/tsconfig-path-mapping/

#### sourceMap <br/>

=> sourcemap files 생성을 활성화한다. true로 설정하면 컴파일된 js 파일 옆에 js.map 파일이
생성된다.

#### removeComments <br/>

=> js 컴파일 시 모든 주석을 제거하는 옵션. 주석 제거시 true로 변경해주어야 함

### ✅ Language and Environment : 컴파일할 언어와 환경을 정의

#### target

=> 컴파일 되는 JS의 버전을 지정함.

```json
{
  "target": "esnext"
}
```

#### ⭐️lib <br/>

=> ts 프로젝트에서 사용할 수 있는 라이브러리의 목록을 지정함. 이 옵션은 기본적으로 ts가
지원하는 기본 라이브러리 목록을 나타낸다.

다음과 같은 옵션들이 있다.
`dom` : dom 및 관련 인터페이스에 대한 타입 제공
`es6, exnext...` : ECMAScript의 해당 스펙에 따른 기능을 지원

만약 밑 같이 설정해줄 경우 ts는 모든 기본 라이브러리가 아닌 해당 배열에 해당하는 라이브러리만
선택적으로 사용한다. 밑과 같이 해당 환경에 맞는 라이브러리만 사용하는 것이 좋다.

```json
{
  "lib": ["esnext", "dom", "dom.iterable"]
}
```

#### jsx <br/>

=> tsx 파일을 jsx로 어떻게 컴파일할 건지 여부 (react' | 'preserve' ... )

```jsx
// preserve
export const Main = () => <div>:)<div>;

//react
export const Main = () => React.createElement("div", null, ":)");
```

### ✅ Javascript support : 자바스크립트와 관련된 속성을 정의

#### allowJs <br/>

=> JS 파일을 프로젝트 내로 가져올 수 있는 기능이다.

#### checkJs <br/>

=> JS 파일에서 오류를 잡아주는 기능이다.

### ✅Completeness : 컴파일을 완전성과 관련된 정의

#### skipLibCheck <br/>

=> ts는 모든 .ts 파일에 대해 라이브러리 정의 파일인 '.d.ts'파일을 찾아서 검사함. 하지만
외부 라이브러리의 타입 정의 파일이 없거나, 부실할 때 'skipLibCheck' 옵션을 사용하면
ts 컴파일러가 라이브러리 정의 파일의 검사를 건너띄고 컴파일을 진행함.

단점으로는, 타입 안정성이 감소한다는 것. 보통은 라이브러리의 정확한 타입 정보를 가져오는 것이 좋다.

#### checkJs <br/>

=> JS 파일에서 오류를 잡아주는 기능이다.
