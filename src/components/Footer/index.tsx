import { data } from "../../index";
import {
  Copyright,
  Div,
  DivCopyright,
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
            <Link
              href={`mailto:${
                data.footer.contact.email.address
              }?subject=${encodeURIComponent(
                data.footer.contact.email.subject
              )}&body=${encodeURIComponent(data.footer.contact.email.body)}`}
            >
              {data.footer.contact.email.address}
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
    <DivCopyright>
      <Copyright>{data.footer.copyright}</Copyright>
    </DivCopyright>
  </Wrapper>
);
