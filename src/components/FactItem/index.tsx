import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Container, Span } from './styles';

type FactItemProps = {
  children: ReactNode;
  title: string;
  image: string;
  color: string;
};

const FactItem: React.FC<FactItemProps> = ({
  children,
  image,
  title,
  color,
}) => {
  return (
    <Container>
      <img src={image} alt={title} />

      <div>
        <Span color={color}>{title}</Span>
        <p>{children}</p>
      </div>
    </Container>
  );
};

FactItem.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default FactItem;
