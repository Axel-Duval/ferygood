import { styled } from "../theme";

export const Main = styled.main`
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.primary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.regular};
  position: relative;
  min-height: 100vh;

  & ::selection {
    background: ${(props) => props.theme.color.yellow};
  }
`;
Main.displayName = "Main";

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  margin: 0 20%;

  @media (max-width: 700px) {
    width: 90%;
    margin: 0 5%;
  }
`;
Wrapper.displayName = "Wrapper";
