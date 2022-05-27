import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import RequireVisitor from 'routing/require-visitor';
import PageLayoutAuth from 'components/page-layout-auth';
import AdminChangeItemForm from 'pages/admin-page/admin-change-item-form';
import store from './store';
import PageLayout from './components/page-layout';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page';
import RequireAuth from './routing/require-auth';

const App: React.FC = () => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<PageLayoutAuth />}>
          <Route path="/auth/login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
          <Route path="/admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
          <Route path="/admin/change-item" element={<RequireAuth><AdminChangeItemForm /></RequireAuth>} />
        </Route>
      </Routes>
    </ReduxProvider>
  </BrowserRouter>
);

export default App;
