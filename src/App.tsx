import { useContext, useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { CustomAuthComponnts } from './ui-sample-components/CustomAuthComponnts';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App, {
  components: CustomAuthComponnts,
  className: 'dark-bg',
});
