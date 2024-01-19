## TASK.1 타입스크립트에서 꼭 필요한 **ts-config**

**Q. ts-config의 역할과 옵션을 다룰 수 있는가?**

@reference
https://www.typescriptlang.org/tsconfig
https://codingapple.com/unit/typescript-tsconfig-json
https://yamoo9.gitbook.io/typescript/cli-env/tsconfig

### 📑 ts-config란?

    - 매번 명령어를 입력하지 않고, 보다 쉽게 사용하려면 컴파일 설정 파일을 만들어서 사용하는 것이 편리하다.
    - 해당 디렉터리가 Typescript 또는 Javascript 프로젝트의 루트임을 나타낸다.

### 📑 tsconfig.json의 역할

1. 컴파일러 옵션 설정: 컴파일러가 TypeScript 코드를 어떻게 컴파일할지 결정합니다. 예를 들어, ECMAScript 버전, 모듈 시스템 등을 설정할 수 있습니다.
2. 프로젝트 파일 포함 및 제외: 특정 파일이나 디렉토리를 컴파일 과정에 포함시키거나 제외할 수 있습니다.
3. 경로 및 모듈 해석 설정: 절대 경로를 사용한 모듈 임포트와 같은 커스텀 모듈 해석 전략을 설정할 수 있습니다.
4. 프로젝트 참조 관리: 다른 TypeScript 프로젝트를 참조하여 빌드 의존성을 관리할 수 있습니다.

### 📑 주요 컴파일러 옵션

    tsconfig의 최상위 속성
        compileOnSave : 저장과 동시에 컴파일 하는 기능. default는 false
        extends : 설정을 상속 받아올 부모 설정의 경로를 작성한다.
        files : 프로젝트 내 어떤 파일을 컴파일 할지 결정하는 옵션. 아무런 작성이 없으면 모든 파일을 컴파일
        include : glob pattern에 일치하는 파일들을 컴파일에 포함
        exclude : "files"와 "include"모두 지정되어 있지 않다면 "exclude"로 제외된 것을 제외하고 모든 TypeScript파일을 포함하는 디렉토리와 하위 디렉토리에 포함시킨다.

    그 외의 주요옵션


    {
        "compilerOptions": {
            "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
            "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
            "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
            "checkJs": true, // 일반 js 파일에서도 에러체크 여부
            "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
            "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
            "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
            "outDir": "./", //js파일 아웃풋 경로바꾸기
            "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
            "removeComments": true, //컴파일시 주석제거
            "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
            "noImplicitAny": true, //any타입 금지 여부
            "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
            "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
            "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
            "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
            "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기
            "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
            "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
            "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
            "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기
            "paths" : 상대 경로를 절대경로로 만들어서 import하기 위해서 설정
        }
    }

```json
  기본 옵션
  "incremental": true,                   /* 증분 컴파일 활성화*/
  "target": "es5",                      /* ECMAScript 목표 버전 설정: 'ES3'(기본), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019'
                                          'ES2020' or 'ESNEXT'.*/
  "module": "esnext",                       /* 생성될 모듈 코드 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.*/
  "lib": ["dom", "dom.iterable", "esnext"], /* 컴파일 과정에 사용될 라이브러리 파일 설정*/
  "allowJs": true,                          /* JavaScript 파일 컴파일 허용*/
  "checkJs": true,                       /* .js 파일 오류 리포트 설정*/
  "jsx": "react",                           /* 생성될 JSX 코드 설정: 'preserve', 'react-native', or 'react'.*/
  "declaration": true,                   /* '.d.ts' 파일 생성 설정*/
  "declarationMap": true,                /* 해당하는 각 '.d.ts'파일에 대한 소스 맵 생성*/
  "sourceMap": true,                     /* 소스맵 '.map' 파일 생성 설정*/
  "outFile": "./",                       /* 복수 파일을 묶어 하나의 파일로 출력 설정*/
  "outDir": "./dist",                    /* 출력될 디렉토리 설정*/
  "rootDir": "./",                       /* 입력 파일들의 루트 디렉토리 설정. --outDir 옵션을 사용해 출력 디렉토리 설정이 가능*/
  "composite": true,                     /* 프로젝트 컴파일 활성화*/
  "tsBuildInfoFile": "./",               /* 증분 컴파일 정보를 저장할 파일 지정*/
  "removeComments": true,                /* 출력 시, 주석 제거 설정*/
  "noEmit": true,                           /* 출력 방출(emit) 유무 설정*/
  "importHelpers": true,                 /* 'tslib'로부터 헬퍼를 호출할 지 설정*/
  "downlevelIteration": true,            /* 'ES5' 혹은 'ES3' 타겟 설정 시 Iterables 'for-of', 'spread', 'destructuring' 완벽 지원 설정*/
  "isolatedModules": true,                  /* 각 파일을 별도 모듈로 변환 ('ts.transpileModule'과 유사)*/


  엄격한 유형 검사 옵션
  "strict": true,                        /* 모든 엄격한 유형 검사 옵션 활성화*/
  "noImplicitAny": true,                 /* 명시적이지 않은 'any' 유형으로 표현식 및 선언 사용 시 오류 발생*/
  "strictNullChecks": true,              /* 엄격한 null 검사 사용*/
  "strictFunctionTypes": true,           /* 엄격한 함수 유형 검사 사용*/
  "strictBindCallApply": true,           /* 엄격한 'bind', 'call', 'apply' 함수 메서드 사용*/
  "strictPropertyInitialization": true,  /* 클래스에서 속성 초기화 엄격 검사 사용*/
  "noImplicitThis": true,                /* 명시적이지 않은 'any'유형으로 'this' 표현식 사용 시 오류 발생*/
  "alwaysStrict": true,                  /* 엄격모드에서 구문 분석 후, 각 소스 파일에 "use strict" 코드를 출력*/

  추가 검사 옵션
  "noUnusedLocals": true,                /* 사용되지 않은 로컬이 있을 경우, 오류로 보고*/
  "noUnusedParameters": true,            /* 사용되지 않은 매개변수가 있을 경우, 오류로 보고*/
  "noImplicitReturns": true,             /* 함수가 값을 반환하지 않을 경우, 오류로 보고*/
  "noFallthroughCasesInSwitch": true,       /* switch 문 오류 유형에 대한 오류 보고*/
 "noUncheckedIndexedAccess": true,      /* 인덱스 시그니처 결과에 'undefined' 포함*/

  모듈 분석 옵션
  "moduleResolution": "node",               /* 모듈 분석 방법 설정: 'node' (Node.js) 또는 'classic' (TypeScript pre-1.6).*/
  "baseUrl": "./",                       /* 절대 경로 모듈이 아닌, 모듈이 기본적으로 위치한 디렉토리 설정 (예: './modules-name')*/
  "paths": {},                           /* 'baseUrl'을 기준으로 상대 위치로 가져오기를 다시 매핑하는 항목 설정*/
  "rootDirs": [],                        /* 런타임 시 프로젝트 구조를 나타내는 로트 디렉토리 목록*/
  "typeRoots": [],                       /* 유형 정의를 포함할 디렉토리 목록*/
  "types": [],                           /* 컴파일 시 포함될 유형 선언 파일 입력*/
  "allowSyntheticDefaultImports": true,     /* 기본 출력(default export)이 없는 모듈로부터 기본 호출을 허용 (이 코드는 단지 유형 검사만 수행)*/
  "esModuleInterop": true,                   /* 모든 가져오기에 대한 네임스페이스 객체 생성을 통해 CommonJS와 ES 모듈 간의 상호 운용성을 제공*/
                                                /* 'allowSyntheticDefaultImports' 암시*/
  "preserveSymlinks": true,              /* symlinks 실제 경로로 결정하지 않음*/
  "allowUmdGlobalAccess": true,          /* 모듈에서 UMD 글로벌에 접근 허용*/


```
