import styled from "styled-components"; // npm i --save-dev @types/styled-components

interface ICircle {
  backgroundColor: string;
  borderColor?: string;
  text?: string;
}

interface IContainer {
  backgroundColor: string;
  borderColor: string;
}
/* 
interface는 object에 type하는 방법  #3.2
?는 optional type으로 string|undefined와 같다.  #3.3 
*/

const Container = styled.div<IContainer>`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
  margin-bottom: 4px;
`;
/*
styled-component의 props를 type할 떈 <Interface명>  #3.2
*/

function Circle({ backgroundColor, borderColor, text = "동그라미" }: ICircle) {
  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor ?? "black"}>
      {text}
    </Container>
  );
}
/*
react component의 props를 type할 떈 ({...props}: Interface명)  #3.2
react component의 props에 기본값을 설정하는 방법 1. text="동그라미"  #3.3
react component의 props를 기본값을 설정하는 방법 2. borderColor={borderColor ?? "black"}
*/
export default Circle;
