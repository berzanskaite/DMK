import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import AdminCreateNewItemPage from 'pages/admin/admin-create-new-item-page';
import PageLayoutAuth from './components/page-layout-auth';
import PageLayout from './components/page-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';
import store from './store';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin/admin-page';
import AdminChangeItemPage from './pages/admin/admin-change-item-page';

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
          <Route path="/admin/change-item/:id" element={<RequireAuth><AdminChangeItemPage /></RequireAuth>} />
          <Route path="/admin/create-new-item" element={<RequireAuth><AdminCreateNewItemPage /></RequireAuth>} />
        </Route>
      </Routes>
    </ReduxProvider>
  </BrowserRouter>
);

export default App;
