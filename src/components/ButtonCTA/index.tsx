import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

type ButtonCTAProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  bgcolor?: string;
};

const ButtonCTA: React.FC<ButtonCTAProps> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      <span>{children}</span>
    </Button>
  );
};

ButtonCTA.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonCTA;
