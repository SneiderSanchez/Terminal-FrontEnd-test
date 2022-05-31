import styled from 'styled-components';
import { device } from '../utils';

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

export const HeadingTitle = styled.h1`
  margin-top: 60px;
  margin-left: 2px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
