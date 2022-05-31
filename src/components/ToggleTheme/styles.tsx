import styled from 'styled-components';
import { device } from '../../utils';

type ToggleButtonProps = {
  onClick: () => void;
  isLightTheme: boolean;
};

export const ToggleButton = styled.button<ToggleButtonProps>`
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  font-size: 2em;
  p {
    margin: 0;
    height: auto;
    width: 2.5rem;
    transition: all 0.5s linear;

    // sun emoji
    &:first-child {
      transform: ${({ isLightTheme }) => (isLightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    // moon emoji
    &:nth-child(2) {
      transform: ${({ isLightTheme }) => (isLightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  text-align: justify;
  padding: 0 8%;
  margin: 40px 0;
  h5 {
    width: 40%;
    font-weight: 300;
  }
  @media only screen and ${device.sm} {
    -webkit-tap-highlight-color: transparent;
  }
`;
