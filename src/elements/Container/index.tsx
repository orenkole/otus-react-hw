import React from "react";
import { ContainerStyle } from "./style";

type ContainerPropsType = {
	children: React.ReactNode;
}

const Container = (props: ContainerPropsType) => {
  return (
    <div css={ContainerStyle}>
      {props.children}
    </div>
  );
};

export {Container};