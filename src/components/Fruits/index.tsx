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
      {data.flavors.list.map((f) => (
        <Fruit>
          <Image src={f.img} alt={f.alt} />
          <Title color={colorFromTheme(f.color, theme)}>{f.title}</Title>
          <Subtitle>{f.subtitle}</Subtitle>
        </Fruit>
      ))}
    </FruitWrapper>
    <TextWrapper>
      <Text>{data.flavors.description}</Text>
    </TextWrapper>
  </>
);
