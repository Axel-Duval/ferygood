import { randomColorFromTheme } from "../../helpers/colors";
import { styled } from "../../theme";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
`;
Flex.displayName = "DivFlex";

export const Table = styled.table`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: 1.3rem;
`;
Table.displayName = "Table";

export const Type = styled.p`
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-top: ${(props) => props.theme.space.xxl};
  margin-bottom: ${(props) => props.theme.space.sm};
  margin-left: 12%;
  width: fit-content;
  letter-spacing: 0.05rem;
  transition: color 0.8s, letter-spacing 0.7s;
  user-select: none;
  z-index: 1;

  &::after {
    z-index: -1;
    transition: width 0.4s;
    position: absolute;
    top: -7px;
    left: -10px;
    content: "";
    height: calc(100% + 14px);
    width: 3px;
    background-color: ${(props) => randomColorFromTheme(props.theme.color)};
  }

  &:hover {
    &::after {
      width: calc(100% + 20px);
    }
    color: white;
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
