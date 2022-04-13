import { data } from "../../index";
import { Flex, Icon, IconLink, Item, Link, List, Logo, Nav } from "./styles";

export const Navbar = () => (
  <Nav>
    <Logo>{data.navigation.logo}</Logo>
    <List>
      {data.navigation.links.map((l) => (
        <Item key={l.label}>
          <Link href={l.to}>{l.label}</Link>
        </Item>
      ))}
    </List>
    <Flex>
      {data.navigation.icons.map((i) => (
        <IconLink href={i.url} key={i.alt}>
          <Icon src={i.img} alt={i.alt} />
        </IconLink>
      ))}
    </Flex>
  </Nav>
);
