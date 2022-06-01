import React from 'react';
import { CardContainer } from './styles';

type CardPropsType = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardPropsType) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};
