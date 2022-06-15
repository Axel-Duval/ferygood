import { randomColorFromTheme } from "../../helpers/colors";
import { styled } from "../../theme";

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background-color: white;
  user-select: none;
`;
Wrapper.displayName = "Wrapper";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: ${(props) => props.theme.space.xxl} 0;
`;
Flex.displayName = "Flex";

export const Div = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.space.sm} 0;
  min-width: min(300px, 100%);
`;
Div.displayName = "Div";

export const Title = styled.p`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.xl};
  padding: ${(props) => props.theme.space.sm} 0;
  z-index: 1;

  &::before {
    position: absolute;
    width: 100%;
    content: "";
    background-color: ${(props) => randomColorFromTheme(props.theme.color)};
    transition: transform 0.4s, height 1s, left 0.2s, top 0.2s;
    z-index: -1;

    top: 25%;
    left: 0;
    height: 30px;
    transform: rotate(6deg);
  }

  &:hover {
    &::before {
      top: 10%;
      left: 0;
      height: calc(100% + 10px);
      transform: rotate(-6deg);
    }
  }
`;
Title.displayName = "Title";

export const Copyright = styled.p`
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  font-style: italic;
  cursor: pointer;
  transition: letter-spacing 0.7s;

  &:hover {
    letter-spacing: 0.07rem;
  }
`;
Copyright.displayName = "Copyright";

export const List = styled.ul`
  position: relative;
  z-index: 1;
`;
List.displayName = "List";

export const Item = styled.li`
  margin: ${(props) => props.theme.space.sm} 0;
`;
Item.displayName = "Item";

export const Link = styled.a`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.color.black};
  text-decoration: none;
  letter-spacing: 0.05rem;
  transition: letter-spacing 1s;
  cursor: url("./emojis/cursors/e-mail.png") 16 16, auto;

  &:hover {
    letter-spacing: 0.1rem;
    &::after {
      position: absolute;
      bottom: -6px;
      left: 0;
      content: "";
      height: 4px;
      width: 100%;
      background-color: ${(props) => props.theme.color.yellow};
    }
  }
`;
Link.displayName = "Link";

export const Text = styled.p`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.color.black};
  letter-spacing: 0.05rem;
`;
Text.displayName = "Text";

export const DivCopyright = styled(Div)`
  padding: ${(props) => props.theme.space.md};
  background: repeating-linear-gradient(
    45deg,
    #f1f1f1,
    #f1f1f1 5px,
    #ffffff 5px,
    #ffffff 25px
  );
`;
