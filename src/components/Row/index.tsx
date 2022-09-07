import React from "react";

const Row = (props: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        display: "flex",
      }}
    >
      {props.children}
    </div>
  );
};

export { Row };
