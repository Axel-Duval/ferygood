import { data } from "../../index";
import { Flex, Icon, IconLink, Item, Link, List, Logo, Nav } from "./styles";

export const Navbar = () => (
  <Nav>
    <Logo>{data.navigation.logo}</Logo>
    <List>
      {data.navigation.links.map((l) => (
        <Item>
          <Link href={l.to}>{l.label}</Link>
        </Item>
      ))}
    </List>
    <Flex>
      {data.navigation.icons.map((i) => (
        <IconLink href={i.url}>
          <Icon src={i.img} alt={i.alt} />
        </IconLink>
      ))}
    </Flex>
  </Nav>
);
