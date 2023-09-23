import { ReactNode } from "react";
import styled from "styled-components";

const Modal = ({ children }: { children: ReactNode }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(21, 14, 40, 0.93);
`;
