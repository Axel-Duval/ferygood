import { styled } from "../../theme";

export const Nav = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.space.xxl} ${(props) => props.theme.space.md};

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;
Nav.displayName = "Nav";

export const List = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.space.md};

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
List.displayName = "List";

export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space.md};
`;
Flex.displayName = "Flex";

export const Logo = styled.p`
  position: relative;
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.xxl};
  user-select: none;
  cursor: pointer;
  transition: transform 1s;

  &::after {
    transition: width 0.2s;
    position: absolute;
    bottom: -15px;
    right: -5px;
    content: "";
    height: 4px;
    width: 0%;
    background-color: ${(props) => props.theme.color.orange};
    transform: rotate(-10deg);
  }

  &:hover {
    transform: scale(1.1);
    &::after {
      width: 70%;
    }
  }

  @media (max-width: 1000px) {
    font-size: ${(props) => props.theme.font.size.xxxl};
    &::after {
      transition: width 0.2s;
      position: absolute;
      bottom: -10px;
      right: -15px;
      content: "";
      height: 4px;
      width: 0%;
      background-color: ${(props) => props.theme.color.orange};
      transform: rotate(-10deg);
    }

    &:hover {
      &::after {
        width: 25%;
      }
    }
  }
`;
Logo.displayName = "Logo";

export const Item = styled.li``;
Item.displayName = "Item";

export const Link = styled.a`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  color: ${(props) => props.theme.color.black};
  text-decoration: none;
  letter-spacing: 0.05rem;
  transition: letter-spacing 1s;

  &::after {
    transition: width 0.2s;
    position: absolute;
    bottom: -6px;
    left: 0;
    content: "";
    height: 4px;
    width: 0;
    background-color: ${(props) => props.theme.color.yellow};
  }

  &:hover {
    letter-spacing: 0.1rem;
    &::after {
      width: 100%;
    }
  }
`;
Link.displayName = "Link";

export const IconLink = styled.a`
  position: relative;
  &::after {
    transition: width 0.2s;
    position: absolute;
    bottom: -6px;
    left: 0;
    content: "";
    height: 4px;
    width: 0;
    background-color: ${(props) => props.theme.color.green};
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
IconLink.displayName = "Link";

export const Icon = styled.img`
  height: 25px;
  width: 25px;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;
Icon.displayName = "Icon";
