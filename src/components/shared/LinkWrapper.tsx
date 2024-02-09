import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface LinkWrapperProps extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ disabled, children, ...props }) => {
  if (disabled) return <>{children}</>;
  return <Link {...props}>{children}</Link>;
};

export default LinkWrapper;
