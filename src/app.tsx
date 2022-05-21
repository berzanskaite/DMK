import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import RegisterPage from 'pages/register-page';
import Footer from 'components/footer';
import store from './store';
import PageLayout from './components/page-layout';
import HomePage from './pages/home-page';
import ContactsPage from './pages/contacts-page';
import OrdersPage from './pages/orders-page';
import AboutPage from './pages/about-page';
import ReviewsPage from './pages/review-page';
import LoginPage from './pages/login-page';
import { AuthProvider } from './features/auth/auth-context';
import AdminPage from './pages/admin-page';
import RequireAuth from './routing/require-auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/uzsakymai" element={<OrdersPage />} />
            <Route path="/apie" element={<AboutPage />} />
            <Route path="/kontaktai" element={<ContactsPage />} />
            <Route path="/atsiliepimai" element={<ReviewsPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
          </Route>
        </Routes>
        <Footer />
      </ReduxProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
