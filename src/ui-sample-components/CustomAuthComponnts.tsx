import { useContext, useEffect, useState, useRef } from 'react';

import { View, Image, Text, useTheme } from '@aws-amplify/ui-react';

export const CustomAuthComponnts = {
  Header: () => {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          alt="Amplify logo"
        />
      </View>
    );
  },

  Footer: () => {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
};
