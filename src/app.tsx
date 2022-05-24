import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Footer from 'components/footer';
import RequireVisitor from 'routing/require-visitor';
import PageLayoutAuth from 'components/page-layout-auth';
import store from './store';
import PageLayout from './components/page-layout';
import HomePage from './pages/home-page';
import ContactsPage from './pages/contacts-page';
import OrdersPage from './pages/orders-page';
import AboutPage from './pages/about-page';
import ReviewsPage from './pages/review-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page';
import RequireAuth from './routing/require-auth';

const App: React.FC = () => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/uzsakymai" element={<OrdersPage />} />
          <Route path="/apie" element={<AboutPage />} />
          <Route path="/kontaktai" element={<ContactsPage />} />
          <Route path="/atsiliepimai" element={<ReviewsPage />} />
        </Route>
        <Route path="/" element={<PageLayoutAuth />}>
          <Route path="/auth/login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
          <Route path="/admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
        </Route>
      </Routes>
    </ReduxProvider>
  </BrowserRouter>
);

export default App;
