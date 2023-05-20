import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalStyles, ThemeProvider } from '@mui/material';

import theme, { globalStyles } from './theme';
import EventsPage from './pages/Events';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <EventsPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
