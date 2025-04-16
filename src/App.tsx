import styled from "styled-components";
import { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  margin: 2px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: chocolate;
  width: 100px;
  padding: 10px 0;
  margin: 2px;
  text-align: center;
  border: none;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ placeholder: "attrs를 사용하여 html태그 속성 추가하기 #2.3" })`
  width: 300px;
  padding: 10px 0;
  background-color: skyblue;
  margin: 2px;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const AnimationBox = styled(Box)`
  animation: ${rotationAnimation} 1s linear infinite;
`;

const NestingBox = styled(Box)`
  span {
    color: white;
  }
  &:hover {
    background-color: orange;
  }
`;

const Smile = styled.span``;
const SmileBox = styled(Box)`
  ${Smile} {
    font-size: 16px;
    &:hover {
      font-size: 32px;
    }
  }
`;

const ThemeBox = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid black;
  padding: 10px;
  margin: 2px;
`;

// JSX
function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Button</Btn>
      <Btn as="a" href="/">
        Anchor
      </Btn>
      <Input />
      <AnimationBox bgColor="olive" />
      <NestingBox bgColor="black">
        <span>Hello</span>
      </NestingBox>
      <SmileBox bgColor="yellow">
        <Smile as="p">😀</Smile>
      </SmileBox>
      <ThemeBox> Theme Provider를 활용하여 darkTheme, lightTheme을 설정할 수 있다. </ThemeBox>
    </Father>
  );
}
/* 
📍 JSX
 */
export default App;
