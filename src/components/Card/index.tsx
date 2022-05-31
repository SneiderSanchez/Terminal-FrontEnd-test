import React from 'react';
import { CardContainer } from './styles';

export type CardPropsType = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardPropsType) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;
