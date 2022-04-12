import { styled } from "../../theme";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-image: url("./pictures/white-bg.jpg");
  background-size: cover;
  user-select: none;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 30px;
  }
`;
Wrapper.displayName = "Wrapper";

export const Div = styled.div`
  width: 500px;
  padding: ${(props) => props.theme.space.lg};

  @media (max-width: 1100px) {
    width: 80%;
  }
`;
Div.displayName = "Div";

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-size: 90px;
  padding: ${(props) => props.theme.space.sm} 0;
`;
Title.displayName = "Title";

export const Text = styled.p`
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.md};
  margin: ${(props) => props.theme.space.md} 0;
  text-align: justify;
`;
Text.displayName = "Text";

export const Button = styled.button``;
Button.displayName = "Button";

export const Quote = styled.p`
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-size: ${(props) => props.theme.font.size.xl};
  text-align: right;
  padding: ${(props) => props.theme.space.sm} 0;

  & span {
    position: relative;
    cursor: pointer;
    &::after {
      transition: width 0.2s;
      position: absolute;
      bottom: -6px;
      left: 0;
      content: "";
      height: 4px;
      width: 0;
      background-color: ${(props) => props.theme.color.green};
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;
Quote.displayName = "Quote";
