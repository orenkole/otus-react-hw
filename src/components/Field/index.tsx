import React  from "react";
import { Cell } from "@/components/Cell";
import { Row } from "@/components/Row";
import { FieldInfoType } from "@/common/types";

export type FieldPropsType = {
  fieldInfo: FieldInfoType;
};

const Field = (props: FieldPropsType) => {
  const { fieldInfo } = props;
  return (
    <div key="_">
      {fieldInfo.map((row) => {
        return <Row key={row[0]?.y} rowNum={row[0]?.y}>
          {row.map((cell) => {
            return <Cell key={cell.id} cellInfo={cell} />;
          })}
        </Row>;
      })}
    </div>
  );
};

export { Field };
