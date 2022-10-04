import {
  Amplify,
  I18n,
  Hub,
  DataStore,
  syncExpression,
  Predicates,
} from 'aws-amplify';
import { defaultDarkModeOverride, translations } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

// import { Post, Comment } from './models';

import '@aws-amplify/ui-react/styles.css';

export const theme = {
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
};

export const initAws = () => {
  Amplify.configure(awsconfig);

  I18n.putVocabularies(translations);

  Hub.listen(/.*/, (data) => {
    console.log('Listening for all messages: ', data.payload.data);
  });

  Hub.listen('auth', async (data) => {
    if (data.payload.event === 'signOut') {
      await DataStore.clear();
    }
  });

  // DataStore.configure({
  //   syncExpressions: [
  //     syncExpression(Post, () => {
  //       // return () => {};
  //       return (post) => post.title('gt', 'ZZ');
  //     }),
  //     syncExpression(Comment, () => {
  //       return Predicates.ALL;
  //     }),
  //   ],
  // });
};
