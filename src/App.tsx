import { useFakeQuery } from './data/fakeFetchClient';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { ToggleTheme } from './components/ToggleTheme';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null },
  });
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <h1>Players Latest Activities</h1>
      <span>{loading ? 'Loading...' : 'Data is loaded'}</span>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
