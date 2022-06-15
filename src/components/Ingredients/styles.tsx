import { randomColorFromTheme } from "../../helpers/colors";
import { styled } from "../../theme";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.space.lg};
  padding: ${(props) => props.theme.space.xxxl} 0;
`;
Flex.displayName = "DivFlex";

export const Table = styled.table`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: 1.3rem;
  background-image: linear-gradient(#f1f1f1 1px, transparent 1px),
    linear-gradient(to right, #f1f1f1 1px, #ffffff 1px);
  background-size: 31px 31px;
`;
Table.displayName = "Table";

export const Type = styled.p`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-top: ${(props) => props.theme.space.xxl};
  margin-bottom: ${(props) => props.theme.space.sm};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  margin-left: 12%;
  width: fit-content;
  letter-spacing: 0.05rem;
  transition: color 0.8s, letter-spacing 0.7s ease-out;
  user-select: none;
  z-index: 1;
  color: white;

  &::after {
    z-index: -1;
    transition: width 0.4s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${(props) => randomColorFromTheme(props.theme.color)};
  }

  &:hover {
    &::after {
      width: 3px;
    }
    color: inherit;
    letter-spacing: 0.1rem;
  }
`;
Type.displayName = "Type";

export const TableBody = styled.tbody`
  & tr:not(:last-child) td {
    border-bottom: solid 1px ${(props) => props.theme.color.black};
  }
`;
TableBody.displayName = "TableBody";

export const TableRow = styled.tr``;
TableRow.displayName = "TableRow";

export const RowHeader = styled.th`
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: ${(props) => props.theme.font.weight.medium};
  border-right: solid 1px ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.grey};
  padding: ${(props) => props.theme.space.md};
  vertical-align: middle;
  text-align: right;
  user-select: none;
  cursor: pointer;

  @media (max-width: 700px) {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    text-align: center;
  }
`;
RowHeader.displayName = "RowHeader";

export const RowData = styled.td`
  padding: ${(props) => props.theme.space.md};
  max-width: 350px;
  text-align: justify;

  @media (min-width: 1600px) {
    max-width: 450px;
  }
  @media (max-width: 1200px) {
    max-width: 350px;
  }
  @media (max-width: 700px) {
    padding: ${(props) => props.theme.space.xs};
  }
`;
RowData.displayName = "RowData";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.xs};
  list-style: disc;
  list-style-position: inside;
  text-align: left;
`;
List.displayName = "List";
