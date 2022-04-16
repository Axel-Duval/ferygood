import { styled } from "../../theme";

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  color: ${(props) => props.theme.color.white};
`;
Flex.displayName = "Flex";

export const Def = styled.p`
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.light};
  letter-spacing: 0.1rem;
  margin-bottom: -7px;
`;
Def.displayName = "Def";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 90px;
  padding: ${(props) => props.theme.space.sm} 0;
  margin-bottom: ${(props) => props.theme.space.sm};
`;
Title.displayName = "Title";

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.regular};
  text-align: justify;
  line-height: 1.3rem;
  border-radius: 2px;
  padding: ${(props) => props.theme.space.sm};
  @media (min-width: 700px) {
    max-width: 400px;
  }
  background: #00000065;
`;
Subtitle.displayName = "Subtitle";

export const Wrapper = styled.h1`
  margin: 0 auto 0 25%;
  @media (max-width: 700px) {
    margin: 5%;
  }
`;
Wrapper.displayName = "Wrapper";
