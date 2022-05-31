import { useFakeQuery } from './data/fakeFetchClient';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { ToggleTheme } from './components/ToggleTheme';
import { MainContent } from './layout';
import SearchBar from './components/SearchBar';
import { HeadingTitle, LoadingContainer } from './layout/MainContent';
import { useMemo, useState } from 'react';
import { transformPlayerArrayData } from './utils';
import { SearchBarFormElements } from './types';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [search, setSearch] = useState('');
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: search },
    forceError: false,
  });

  const formattedPlayers = useMemo(() => transformPlayerArrayData(data), [data]);

  const handleOnSubmit = (e: React.FormEvent<SearchBarFormElements>) => {
    e.preventDefault();
    const { searchInput } = e.currentTarget.elements;
    setSearch(searchInput.value);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <MainContent>
        <HeadingTitle>Recent Activity</HeadingTitle>
        <SearchBar onSubmit={handleOnSubmit} placeHolder="Search By Name" name="searchBar" />
        {loading && !error && (
          <LoadingContainer>
            <h1>Loading...</h1>
          </LoadingContainer>
        )}
        {data && !loading && <></>}
        {/* TODO: Create a fallback error component and useType of errors? */}
        {error && <h1>Error during the call 😭</h1>}
      </MainContent>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
