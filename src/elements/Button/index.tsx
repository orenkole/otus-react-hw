// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
import React, {useRef} from "react";
import { ButtonStyle } from "./style";

type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
}

const handleRipple = (args: {
	e: React.MouseEvent,
	rippleElementRef: React.RefObject<HTMLDivElement>,
	rippleCircleRef: React.RefObject<HTMLSpanElement>,
	buttonRef: React.RefObject<HTMLButtonElement>
}) => {
  const buttonElement = args.buttonRef.current as HTMLButtonElement;
  const rippleElement = args.rippleElementRef.current as HTMLDivElement;
  const rippleCircleElement = args.rippleCircleRef.current as HTMLSpanElement;
	
  const x = args.e.clientX - buttonElement.offsetLeft;
  const y = args.e.clientY - buttonElement.offsetTop;
  rippleCircleElement.style.left = `${x}px`;
  rippleCircleElement.style.top = `${y}px`;

  rippleElement.classList.add("active");
  setTimeout(() => {
    rippleElement.classList.remove("active");
  }, 300);
};

const Button = (props: ButtonPropsType) => {

  const rippleElementRef = useRef<HTMLDivElement>(null);
  const rippleCircleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
	
  return (
    <button
      css={ButtonStyle}
      ref={buttonRef}
      {...props}
    >
      {props.children}
      <div
        onClick={(e) => {handleRipple({e, rippleElementRef, rippleCircleRef, buttonRef});}}
        className="ripple" 
        ref={rippleElementRef}
      >
        <span className="ripple-circle" ref={rippleCircleRef}></span>
      </div>
    </button>
  );
};

export {Button};