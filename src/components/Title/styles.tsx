import { styled } from "../../theme";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
Flex.displayName = "DivFlex";

interface IWrapperProps {
  overlay: string;
}
export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  user-select: none;
  margin: ${(props) => props.theme.space.md} 0;
  max-width: 380px;
  letter-spacing: 0.05rem;
  transition: letter-spacing 1s;

  &::before {
    position: absolute;
    top: 55px;
    left: 10%;
    height: 5px;
    width: 80%;
    content: "";
    background-color: ${(props: IWrapperProps) => props.overlay};
    transition: transform 0.4s, height 1s, left 0.2s, width 0.2s;
  }

  &:hover {
    letter-spacing: 0.15rem;
    &::before {
      left: 0;
      width: 100%;
      height: 35px;
      transform: rotate(-6deg);
    }
  }
`;
Wrapper.displayName = "TitleWrapper";

export const H2 = styled.h2`
  position: relative;
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.xxxl};
  padding: ${(props) => props.theme.space.sm} 0;
`;
H2.displayName = "H2";

export const Subtitle = styled.p`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.md};
  letter-spacing: 0;
`;
Subtitle.displayName = "Subtitle";
