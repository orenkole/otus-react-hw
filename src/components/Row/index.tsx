import React from "react";

const Row = (props: { children: React.ReactNode, rowNum: number }) => {
  return (
    <div
      key={props.rowNum}
      css={{
        display: "flex",
      }}
      data-testid={`row-${props.rowNum}`}
    >
      {props.children}
    </div>
  );
};

export { Row };
