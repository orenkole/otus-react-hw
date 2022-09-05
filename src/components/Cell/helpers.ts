import { Dispatch } from 'react';
import { ActionsType } from '@/common/types';

// https://www.geeksforgeeks.org/how-to-create-a-ripple-effect-on-click-the-button/
const handleRipple = (args: {
  e: React.MouseEvent;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  const cell = args.e.currentTarget as HTMLElement; // https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
  args.ref?.current?.classList.add('active'); // https://www.designcise.com/web/tutorial/how-to-fix-object-is-possibly-null-typescript-error-when-using-useref-react-hook
  const x = args.e.clientX - cell.offsetLeft;
  const y = args.e.clientY - cell.offsetTop;
  if (args.ref && args.ref.current) {
    args.ref.current.style.left = `${x}px`;
    args.ref.current.style.top = `${y}px`;
  }
  setTimeout(() => {
    args.ref?.current?.classList.remove('active');
  }, 300);
};

const handleClick = (args: {
  e: React.MouseEvent;
  ref: React.RefObject<HTMLDivElement>;
  dispatch: Dispatch<ActionsType>;
  payload: string;
}) => {
  handleRipple({ ...args });
  args.dispatch({ type: 'CELL_CLICK', payload: args.payload });
};

export { handleRipple };
