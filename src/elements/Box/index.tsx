import React from "react";

type BoxPropsType = { children: React.ReactNode } & React.CSSProperties;

const Box = (props: BoxPropsType) => {
  const { children, ...cssProps } = props;
  return <div css={{ ...cssProps }}>{children}</div>;
};

export { Box };
