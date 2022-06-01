import styled from 'styled-components';
import { PlayerFormatted } from '../../types';
import { device } from '../../utils';
import Badge from '../Badge';
import Card from '../Card';

type AvatarProp = Pick<PlayerFormatted, 'flipImageOnMobile'>;

export const Avatar = styled.img<AvatarProp>`
  width: 100px;
  height: 100px;
  margin-right: 16px;
  object-fit: cover;
  @media only screen and ${device.sm} {
    margin-right: 36px;
    ${({ flipImageOnMobile }) => (flipImageOnMobile ? 'transform: scaleX(-1);' : '')}
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  justify-content: center;
  margin-right: auto;
  & > h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin-left: 1px;
  }
  & .lastActivity {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const PlayerBadge = styled(Badge)`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  font-style: normal;
  height: 48px;
  width: 48px;
  @media only screen and ${device.sm} {
    position: absolute;
    left: 25%;
  }
`;

export const PlayerCardContainer = styled(Card)`
  align-items: center;
  padding: 16px;
  width: 528px;
  flex: 50%;
  @media only screen and ${device.sm} {
    padding: 16px 12px;
    width: 319px;
  }
  @media only screen and ${device.md} {
    max-width: 800px;
  }
`;
