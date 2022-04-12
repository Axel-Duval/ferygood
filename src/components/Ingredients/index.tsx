import { data } from "../../index";
import {
  Flex,
  List,
  RowData,
  RowHeader,
  Table,
  TableBody,
  TableRow,
  Type,
} from "./styles";

const handleClick = (value: string | string[]) =>
  navigator.clipboard.writeText(
    typeof value === "string" ? value : value.join(" <> ")
  );

export const Ingredients = () => {
  return (
    <Flex>
      {data.ingredients.items.map((i) => (
        <div>
          <Type>{i.type}</Type>
          <Table>
            <TableBody>
              {i.table.map((e) => (
                <TableRow>
                  <RowHeader
                    onClick={() => {
                      handleClick(e.value);
                    }}
                  >
                    {e.key}
                  </RowHeader>
                  <RowData>
                    {typeof e.value === "string" ? (
                      e.value
                    ) : (
                      <List>
                        {e.value.map((v) => (
                          <li>{v}</li>
                        ))}
                      </List>
                    )}
                  </RowData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </Flex>
  );
};
