/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, observer } from "mobx-react";
import React, { FC, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";

import { AppStore, InvestedData } from "../../stores/AppStore";
import { Container } from "./MainPage.styles";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { handleRows } from "../../utils";

type InjectedProps = {
  appStore: AppStore;
};

export const MainPage: FC<InjectedProps> = ({ appStore }) => {
  const columns = [ '', 'Дата', 'Скільки', 'Стаття', 'Коментар' ];
  const [expanded, setExpanded] = useState<string[]>([]);
  
  const { investedData, totalInvested, notInvolved } = appStore;

  useEffect(() => {
    // appStore.getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Handles expand and collapse
  const isExpanded = (expandedItemKey: string): boolean => expanded.indexOf(expandedItemKey) !== -1;

  const handleTogglePanel = (name: string, index: number): void => {
    const newExpanded = handleRows(expanded, index, name);
    setExpanded(newExpanded);
  };

  return (
    <Container>
      {/* MainPage */}
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-around">
          <div className="max-w-80 w-full py-4">
            <Card className="p-4">
              <CardHeader className="flex-col border-b">
                <h4 className="font-bold">Всього вкладено</h4>
              </CardHeader>
              <CardBody className="text-center">
                ${totalInvested}
              </CardBody>
            </Card>
          </div>
          <div className="max-w-80 w-full py-4">
            <Card className="p-4">
              <CardHeader className="flex-col border-b">
                <h4 className="font-bold">Не задіяно коштів</h4>
              </CardHeader>
              <CardBody className="text-center">
                ${notInvolved}
              </CardBody>
            </Card>
          </div>
        </div>

        <Table aria-label="Example static collection table">
          <TableHeader>
            {columns.map(item => <TableColumn key={item}>{item}</TableColumn>)}
          </TableHeader>
          <TableBody>
            {investedData.map((item: InvestedData, ind: number) => {
              const key = item.sum + '_' + ind;
              const isItemExpanded = isExpanded(key);

              return (
                <TableRow key={key} className={`h-14 ${ind !== investedData.length -1 ? "border-b" : ""}`}>
                  <TableCell className="w-14">
                    {item.expenses && item.expenses.length && (
                      <Button
                        color="primary"
                        variant="light"
                        isIconOnly={true}
                        onClick={() => {
                          handleTogglePanel(item.sum, ind);
                        }}
                      >
                        <Arrow className={`icon ${isItemExpanded ? 'rotate': ''}`}/>
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell >{item.sum}</TableCell>
                  <TableCell>{item.expenseItem}</TableCell>
                  <TableCell>{item.comment}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </Container>
  )
};

MainPage.displayName = "MainPage";

export default inject("appStore")(observer(MainPage)) as unknown as FC;
