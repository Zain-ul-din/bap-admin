import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputGroup, InputGroupProps, InputRightElement } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

interface PasswordInputProps extends Omit<InputGroupProps, 'children'> {
  children: ({ canShow }: { canShow: boolean }) => ReactNode;
}

export default function PasswordInput({ children, ...rest }: PasswordInputProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <InputGroup {...rest}>
      <InputRightElement cursor={'pointer'} onClick={() => setShow(!show)}>
        {show ? <ViewOffIcon /> : <ViewIcon />}
      </InputRightElement>
      {children({ canShow: show })}
    </InputGroup>
  );
}
