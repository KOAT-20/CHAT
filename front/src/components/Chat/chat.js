import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  height: 100vh;
`;

export const Col = styled.div`
  flex: ${(props) => props.size}
`;

export const ContainerChatOuter = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1A1A1D;
`;

export const ContainerChatInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  height: 100%;
`;
