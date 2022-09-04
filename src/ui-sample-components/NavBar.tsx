import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  View,
  Image,
  Text,
  Button,
  useAuthenticator,
} from '@aws-amplify/ui-react';

export const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <Card borderRadius={0}>
      <Flex alignItems="center">
        <Image
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          alt="logo"
          width={30}
          height={30}
        />
        <Text fontSize={24} fontWeight="bold" marginRight={20}>
          Logo
        </Text>

        <Button variation="link" onClick={() => navigate('/')}>
          Home
        </Button>

        <Button variation="link" onClick={() => navigate('/map')}>
          Map
        </Button>

        <Button variation="link" onClick={() => navigate('/notifications')}>
          Notifications
        </Button>

        <View flex={1} />

        <Button variation="link" onClick={() => navigate('/account')}>
          <Image
            src={`https://avatars.dicebear.com/api/identicon/${user.getUsername()}.svg`}
            alt="avatar"
            width={30}
            height={30}
            borderRadius={20}
            marginRight={10}
          />
          <Text>{user.attributes?.email}</Text>
        </Button>
      </Flex>
    </Card>
  );
};
