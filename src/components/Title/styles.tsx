import { styled } from "../../theme";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: repeating-linear-gradient(
    -45deg,
    #f1f1f1,
    #f1f1f1 5px,
    #ffffff 5px,
    #ffffff 25px
  );
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

  &::before {
    position: absolute;
    width: 100%;
    content: "";
    background-color: ${(props: IWrapperProps) => props.overlay};
    transition: transform 0.4s, height 1s, left 0.2s, top 0.2s;

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
Wrapper.displayName = "TitleWrapper";

export const H2 = styled.h2`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.bold};
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
