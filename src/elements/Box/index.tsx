import React from "react";

type BoxPropsType = { children: React.ReactNode; } & any

const Box = ({children, ...styleParams}: BoxPropsType) => {
  return (
    <div css={styleParams}>
      {children}
    </div>
  );
};

export {Box};