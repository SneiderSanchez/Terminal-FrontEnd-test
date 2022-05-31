import React, { useRef, useState } from 'react';
import { useDebouncedEffect } from '../../hooks/useDebounce';
import { lightTheme } from '../../theme';
import { SearchBarFormElements } from '../../types';
import { Form, SearchButton, SearchIcon, SearchInput } from './styles';

export type SearchBarProps = {
  onSubmit: (event: React.FormEvent<SearchBarFormElements>) => void;
  placeHolder: string;
  name?: string;
};

const SearchBar = ({ onSubmit, placeHolder, name = '' }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');
  const formRef = useRef(null);
  // Use this ref to verify that the dispatchEvent is not trigger on the first render
  const mounted = React.useRef(false);

  useDebouncedEffect(
    () => {
      if (mounted.current) {
        formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      } else {
        // Since this is the first render,after this we want the event to be dispatched normally
        mounted.current = true;
      }
    },
    400,
    [inputValue],
  );

  return (
    <Form
      onSubmit={(e: React.FormEvent<SearchBarFormElements>) => {
        onSubmit(e);
      }}
      ref={formRef}
      title={name}
      name={name}
    >
      <SearchInput
        placeholder={placeHolder}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="searchInput"
        name="searchInput"
      />

      <SearchButton>
        <SearchIcon theme={lightTheme} />
      </SearchButton>
    </Form>
  );
};

export default SearchBar;
