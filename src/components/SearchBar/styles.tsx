import styled from 'styled-components';
import { Search } from '@styled-icons/ionicons-outline';
import { device } from 'utils';

export const Form = styled.form`
  display: flex;
  margin: 48px 0;
  color: ${({ theme }) => theme.lightColor};
  background: ${({ theme }) => theme.lightBackground};
  border: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  width: 100%;
  @media only screen and ${device.sm} {
    margin: 24px 0;
    width: 99.5%;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  color: ${({ theme }) => theme.lightColor};
  padding: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.lightBackground};
`;

export const SearchButton = styled.button`
  border: 0;
  background: ${({ theme }) => theme.lightBackground};
  margin-right: 10px;
`;
export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.lightColor};
  height: 30px;
`;
