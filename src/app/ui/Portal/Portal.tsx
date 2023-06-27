import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  destination?: HTMLElement | null;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    destination = document.body,
  } = props;

  if (!!destination) {
    return createPortal(children, destination);
  }

  return null;
};