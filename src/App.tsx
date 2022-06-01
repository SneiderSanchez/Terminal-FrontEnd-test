import { useFakeQuery } from './data/fakeFetchClient';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { ToggleTheme } from './components/ToggleTheme';
import { MainContent, PlayersCardContainer } from './layout';
import {
  ErrorHandler,
  Header,
  LoadingScreen,
  NoResults,
  PlayerCard,
  SearchBar,
} from './components';
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
        <Header />
        <SearchBar onSubmit={handleOnSubmit} placeHolder="Search By Name" name="searchBar" />
        {loading && !error && <LoadingScreen />}
        {data && !loading && (
          <>
            <PlayersCardContainer data-testid="playersCardContainer">
              {formattedPlayers.length ? (
                formattedPlayers.map((player, index) => (
                  <PlayerCard {...player} key={`${player.fullName}-${index}`} />
                ))
              ) : (
                <NoResults message={`No players found with "${search}" criteria 😭`} />
              )}
            </PlayersCardContainer>
          </>
        )}
        {error && <ErrorHandler errorObj={error} />}
      </MainContent>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
