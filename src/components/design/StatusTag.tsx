import { Tag, TagProps } from "@chakra-ui/react";

type Status = "pending" | "cancelled" | "completed"

interface StatusTagProps extends TagProps {
  status: Status
}

const defaultProps: Record<Status, TagProps> = {
  "pending": {
    bg: 'blue.500',
    color: 'white'
  },
  "completed": {
    bg: 'green.500',
    color: 'white'
  }, 
  "cancelled": {
    bg: 'red.500',
    color: 'white'
  }, 
} 

export default function StatusTag({ status, children, ...rest } : StatusTagProps) {
  return <Tag {...defaultProps[status]} {...rest}>{children}</Tag>
}
