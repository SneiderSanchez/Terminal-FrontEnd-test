import styled from 'styled-components';
import { device } from '../../utils';

export const HeadingTitle = styled.h1`
  margin-top: 60px;
  margin-left: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  @media only screen and ${device.sm} {
    margin-top: 31px;
  }
`;
