import { styled } from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: ${(props) => props.theme.space.xl};
  align-items: center;
  position: relative;
  padding: ${(props) => props.theme.space.xxxl} 0;
`;
Wrapper.displayName = "Wrapper";

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.font.family.primary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.extralight};
  font-size: 80px;
  user-select: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &::after {
    transition: width 0.2s;
    position: absolute;
    top: -0px;
    right: -15px;
    content: "";
    height: 4px;
    width: 0%;
    background-color: ${(props) => props.theme.color.yellow};
    transform: rotate(15deg);
  }

  &:hover {
    transform: scale(1.2);
    &::after {
      width: 50%;
    }
  }
`;
CountWrapper.displayName = "Count";

export const Suffix = styled.span`
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: ${(props) => props.theme.font.size.md};
`;
Suffix.displayName = "Span";
