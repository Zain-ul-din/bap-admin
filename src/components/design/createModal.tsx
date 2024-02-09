import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode, createContext, useContext } from 'react';

export interface ModalContextProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface ModalLayoutProps {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

const createModal = () => {
  const ModalState = createContext<ModalContextProps>({
    isOpen: false,
    onClose: () => {},
    onOpen: () => {},
  });

  const Provider = ({ children }: { children: ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <ModalState.Provider
        value={{
          isOpen,
          onOpen,
          onClose,
        }}
      >
        {children}
      </ModalState.Provider>
    );
  };

  const Layout = ({ title, children, footer }: ModalLayoutProps) => {
    const { isOpen, onClose } = useContext(ModalState);

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(2px)" />
        <ModalContent className="border border-grey-300" mx={2} my={'auto'}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{children}</ModalBody>

          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  const useModalState = () => useContext(ModalState);

  return {
    useModalState,
    Provider,
    Layout,
  };
};

export default createModal;
