import styled from 'styled-components';

export const StyledBadge = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  &.variant-red {
    background-color: #eb2323;
  }
  &.variant-yellow {
    background-color: #f3c41e;
  }
  &.variant-green {
    background-color: #00b32a;
  }
  &.variant-blue {
    background-color: #4192dc;
  }
`;
