import { useFakeQuery } from './data/fakeFetchClient';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { ToggleTheme } from './components/ToggleTheme';
import { MainContent } from './layout';
import { HeadingTitle, LoadingContainer } from './layout/MainContent';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <MainContent>
        <HeadingTitle>Recent Activity</HeadingTitle>
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
