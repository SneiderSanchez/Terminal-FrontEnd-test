import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  &.variant-default {
    // Stuff that we need on default variant
  }
  &.variant-rounded {
    border-radius: 1rem;
  }
`;
