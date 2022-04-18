import { SupportsCounter } from "../components/Counters/Supports";
import { VisitsCounter } from "../components/Counters/Visits";
import { Emojis } from "../components/Emojis";
import { Footer } from "../components/Footer";
import { Fruits } from "../components/Fruits";
import { Head } from "../components/Head";
import { Ingredients } from "../components/Ingredients";
import { Navbar } from "../components/Navbar";
import { ProgressBar } from "../components/ProgressBar";
import { Title } from "../components/Title";
import { colorFromTheme } from "../helpers/colors";
import { data } from "../index";
import { theme } from "../theme";
import { Main, Wrapper } from "./home.styles";

export const Home = () => (
  <Main>
    <ProgressBar />
    <Wrapper>
      <Navbar />
      <Head />
      {/* <Header /> */}
      <Title
        id={data.flavors.head.id}
        name={data.flavors.head.title}
        description={data.flavors.head.subtitle}
        color={colorFromTheme(data.flavors.head.color, theme)}
      />
      <Fruits />
      <Title
        id={data.ingredients.head.id}
        name={data.ingredients.head.title}
        description={data.ingredients.head.subtitle}
        color={colorFromTheme(data.ingredients.head.color, theme)}
      />
      <Ingredients />
      <Emojis />
      <Title
        id={data.team.head.id}
        name={data.team.head.title}
        description={data.team.head.subtitle}
        color={colorFromTheme(data.team.head.color, theme)}
      />
      <Title
        id={data.values.head.id}
        name={data.values.head.title}
        description={data.values.head.subtitle}
        color={colorFromTheme(data.values.head.color, theme)}
      />
      <Title
        id={data.explainations.head.id}
        name={data.explainations.head.title}
        description={data.explainations.head.subtitle}
        color={colorFromTheme(data.explainations.head.color, theme)}
      />
    </Wrapper>
    <Footer />
    <VisitsCounter />
    <SupportsCounter />
  </Main>
);
