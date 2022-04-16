import { Parallax } from "react-scroll-parallax";
import { colorFromTheme } from "../../helpers/colors";
import { data } from "../../index";
import { theme } from "../../theme";
import {
  Fruit,
  FruitWrapper,
  Image,
  Subtitle,
  Text,
  TextWrapper,
  Title,
} from "./styles";

export const Fruits = () => (
  <>
    <FruitWrapper>
      {data.flavors.list.map((f, i) => (
        <Fruit key={f.title}>
          <Parallax translateY={window.innerWidth > 600 ? [0, 10 * i] : [0, 0]}>
            <Image src={f.img} alt={f.alt} />
            <Title color={colorFromTheme(f.color, theme)}>{f.title}</Title>
            <Subtitle>{f.subtitle}</Subtitle>
          </Parallax>
        </Fruit>
      ))}
    </FruitWrapper>
    <Parallax speed={-4}>
      <TextWrapper>
        <Text>{data.flavors.description}</Text>
      </TextWrapper>
    </Parallax>
  </>
);
