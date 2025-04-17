# TYPESCRIPT 강의 내용 정리

📍 강의 사이트 : NOMAD CORDER  
📍 강의 제목 : React JS 마스터클래스  
📍 강의 챕터 : #3 TYPESCRIPT  
📍 비고 : NOMAD CORDER 'React JS 마스터클래스 #2 STYLED-COMPONENTS' 강의 내용을 기반으로 작성됨.

---

### #3.1

**📗Typescript로 ReactJS 템플릿 생성하기**

- `npx create-react-app 프로젝트명 --template typescript`
- App.tsx에서 `const root = ReactDOM.createRoot(document.getElementById("root")!);` 수정

**📗Javascript기반의 라이브러리를 typescript에게 알려주기**

- `npm i styled-components`
- `npm i --save-dev @types/styled-components`

---

### #3.2

**📗React Component의 props를 type하는 방법**  
**📗Styled-Component의 props를 type하는 방법**

---

### #3.3

**📗Optional Type을 설정하는 방법**  
**📗React Component의 props에 기본값을 설정하는 2가지 방법**

---

### #3.4

**📗useState를 type하는 방법**

---

### #3.5

**📗input의 event를 type하는 방법**

- `React.FormEvent<HTMLInputElement>`

**📗form의 event를 type하는 방법**

- `React.FormEvent<HTMLFormElement>`

---

### #3.6

**📗Styled-Component의 theme을 type하는 방법**

- 참고문서 : https://styled-components.com/docs/api#typescript
- `npm i @types/styled-components`
- src 안에 declaration 파일 만들기 → `styled.d.ts`
  ```ts
  import "styled-components";
  declare module "styled-components" {
    export interface DefaultTheme {
      // theme의 interface를 정의 하는곳
      textColor: string;
      backgroundColor: string;
      buttonColor: string;
    }
  }
  ```
- src안에 theme파일 만들기 → `theme.ts`
  ```ts
  import { DefaultTheme } from "styled-components/dist/types";
  // theme을 정의하는 곳
  const lightTheme: DefaultTheme = {
    backgroundColor: "white",
    textColor: "black",
    buttonColor: "tomato",
  };
  const darkTheme: DefaultTheme = {
    backgroundColor: "black",
    textColor: "white",
    buttonColor: "teal",
  };
  export { lightTheme, darkTheme };
  ```
- index.tsx에서 `<App>`을 `<ThemeProvider theme="lightTheme">`로 감싸기
