import { styled } from "../../theme";

export const FruitWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;
FruitWrapper.displayName = "FruitWrapper";

export const Fruit = styled.div`
  text-align: center;
`;
Fruit.displayName = "Fruit";

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 250px;
  border-radius: 25%;
  user-select: none;
  @media (min-width: 700px) {
    cursor: pointer;
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
Image.displayName = "Image";

interface ITitleProps {
  color: string;
}
export const Title = styled.p`
  position: relative;
  z-index: 2;
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-size: ${(props) => props.theme.font.size.xxl};
  color: ${(props: ITitleProps) => props.color};
  margin-top: -${(props) => props.theme.space.sm};
  margin-bottom: ${(props) => props.theme.space.sm};
`;
Title.displayName = "Title";

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.light};
  letter-spacing: 0.05rem;
  line-height: 1.7rem;
`;
Subtitle.displayName = "Subtitle";

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
`;
TextWrapper.displayName = "TextWrapper";

export const Text = styled.p`
  text-align: justify;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: 1.3rem;

  margin: 200px 0;
  width: min(90%, 500px);
`;
Text.displayName = "Text";
