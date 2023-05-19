import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app';
import EventsPage from './pages/Events';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route index element={<EventsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
