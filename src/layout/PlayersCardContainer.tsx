import styled from 'styled-components';
import { device } from '../utils';

export const PlayersCardContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  @media only screen and ${device.sm} {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
  @media only screen and ${device.md} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
