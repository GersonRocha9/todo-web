import styled from "styled-components";

// Criando componente com styled-components
export const Container = styled.div`
  background-color: #17181f;
  color: #797a81;
  min-height: 100vh;
`;

// Isso é cada div sendo criada como componente com styled-components
export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

// Isso é um H1 sendo criado como componente com styled-components
export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;
