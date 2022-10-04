import { useContext, useEffect, useState, useRef } from 'react';

import { Auth } from 'aws-amplify';
import {
  Flex,
  Card,
  Text,
  Button,
  useAuthenticator,
} from '@aws-amplify/ui-react';

import { Header } from '../components/layouts/Header';
import { Footer } from '../components/layouts/Footer';
import { Sidebar } from '../components/layouts/Sidebar';

export const Account = () => {
  return (
    <section className="my-layout">
      <header>
        <Header />
      </header>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

const Content = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((currentAuthenticatedUser) => {
      console.log('currentAuthenticatedUser', currentAuthenticatedUser);
    });

    Auth.currentCredentials().then((currentCredentials) => {
      console.log('currentCredentials', currentCredentials);
    });

    Auth.currentSession().then((currentSession) => {
      console.log('currentSession', currentSession);
    });

    Auth.currentUserCredentials().then((currentUserCredentials) => {
      console.log('currentUserCredentials', currentUserCredentials);
    });

    Auth.currentUserInfo().then((currentUserInfo) => {
      console.log('currentUserInfo', currentUserInfo);
    });

    Auth.currentUserPoolUser().then((currentUserPoolUser) => {
      console.log('currentUserPoolUser', currentUserPoolUser);
    });
  }, []);

  return <div />;
};
