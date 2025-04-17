import styled from "styled-components"; // npm i --save-dev @types/styled-components

// interface는 object에 type하는 방법
interface CircleProps {
  bgColor: string;
}

// styled-component의 props를 type하는 방법
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// Component의 props를 type하는 방법
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
