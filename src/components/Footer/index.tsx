import { data } from "../../index";
import {
  Copyright,
  Div,
  Flex,
  Item,
  Link,
  List,
  Text,
  Title,
  Wrapper,
} from "./styles";

export const Footer = () => (
  <Wrapper>
    <Flex>
      <Div>
        <Title>{data.footer.contact.title}</Title>
        <List>
          <Item>
            <Text>{data.footer.contact.address}</Text>
          </Item>
          <Item>
            <Link href={`mailto:${data.footer.contact.email}`}>
              {data.footer.contact.email}
            </Link>
          </Item>
        </List>
      </Div>

      <Div>
        <Title>{data.footer.support.title}</Title>
        <List>
          <Item>
            <Text>{data.footer.support.subtitle}</Text>
          </Item>
        </List>
      </Div>
    </Flex>
    <Div>
      <Copyright>{data.footer.copyright}</Copyright>
    </Div>
  </Wrapper>
);
