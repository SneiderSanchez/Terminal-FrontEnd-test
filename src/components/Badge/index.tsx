import React from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { darkTheme, ThemeType } from '../../theme/theme';
import { StyledBadge } from './styles';

export type BadgePropsType = {
  value: number;
  theme: ThemeType;
  className?: string;
};

const getBadgeClassNameColor = (value: number) => {
  switch (true) {
    case value === 0:
      return 'variant-red';

    case value > 0 && value < 0.25:
      return 'variant-yellow';

    case value >= 0.25 && value < 0.75:
      return 'variant-green';

    case value >= 0.75:
      return 'variant-blue';

    default:
      return null;
  }
};
const Badge = ({ className = '', value, theme }: BadgePropsType) => {
  const badgeClassname = getBadgeClassNameColor(value);

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledBadge className={`${className} ${badgeClassname}`}>{value}</StyledBadge>
    </ThemeProvider>
  );
};

export default withTheme(Badge);
