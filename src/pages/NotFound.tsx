import { useContext, useEffect, useState, useRef } from 'react';

import { View, Heading, useTheme } from '@aws-amplify/ui-react';

import { NavBar } from '../ui-sample-components/NavBar';

export const NotFound = () => {
  const { tokens } = useTheme();

  return (
    <>
      <NavBar />

      <View textAlign="center" padding={tokens.space.large}>
        <Heading>404 | Not Found</Heading>
      </View>
    </>
  );
};
