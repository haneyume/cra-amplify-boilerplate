import { useContext, useEffect, useState, useRef } from 'react';

import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';

import { Header } from '../components/layouts/Header';
import { Footer } from '../components/layouts/Footer';
import { Sidebar } from '../components/layouts/Sidebar';

export const Notification = () => {
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
  const [jwt, setJwt] = useState<string>('');

  useEffect(() => {
    // Auth.currentAuthenticatedUser().then((currentAuthenticatedUser) => {
    //   console.log('currentAuthenticatedUser', currentAuthenticatedUser);
    // });

    // Auth.currentCredentials().then((currentCredentials) => {
    //   console.log('currentCredentials', currentCredentials);
    // });

    Auth.currentSession().then((currentSession) => {
      console.log('currentSession', currentSession);
      console.log(currentSession.getIdToken().getJwtToken());

      const payload = currentSession.getIdToken().payload;

      setJwt(JSON.stringify(payload));
    });

    // Auth.currentUserCredentials().then((currentUserCredentials) => {
    //   console.log('currentUserCredentials', currentUserCredentials);
    // });

    // Auth.currentUserInfo().then((currentUserInfo) => {
    //   console.log('currentUserInfo', currentUserInfo);
    // });

    // Auth.currentUserPoolUser().then((currentUserPoolUser) => {
    //   console.log('currentUserPoolUser', currentUserPoolUser);
    // });
  }, []);

  return (
    <div className="p-5 space-y-5">
      <div>{user.username}</div>

      <div>{jwt}</div>

      <input
        className="bg-red-500 text-white rounded px-5 cursor-pointer"
        type="button"
        value="Sign Out"
        onClick={signOut}
      />
    </div>
  );
};
