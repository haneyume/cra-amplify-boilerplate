import { useContext, useEffect, useState, useRef } from 'react';

import { Auth } from 'aws-amplify';
import {
  Flex,
  Card,
  Text,
  Button,
  useAuthenticator,
} from '@aws-amplify/ui-react';

import { NavBar } from '../ui-sample-components/NavBar';

export const Account = () => {
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

  return (
    <>
      <NavBar />

      <Button
        variation="primary"
        backgroundColor="red"
        color="white"
        onClick={signOut}
      >
        Sign Out
      </Button>
    </>
  );
};
