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

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  max-width: 1136px;

  @media only screen and ${device.sm} {
    max-width: 343px;
  }
  @media only screen and ${device.md} {
    max-width: 579px;
  }
`;
