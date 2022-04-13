import { styled } from "../../theme";

export const FruitWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  min-height: 400px;
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
    @keyframes bounce {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-100px);
      }
      50% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }

    &:hover {
      animation-duration: 1.4s;
      animation-name: bounce;
      animation-timing-function: ease;
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

  margin: 40px 0 60px;
  width: 60%;
  @media (min-width: 1600px) {
    width: 40%;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
Text.displayName = "Text";
