import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FiBell } from 'react-icons/fi';

import { useAuthenticator } from '@aws-amplify/ui-react';

import { AppContext } from '../../contexts/AppContext';

export const Header = () => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div className="w-full h-full flex items-center px-10 space-x-5">
      <div
        className="flex items-center space-x-5 cursor-pointer hover:opacity-70"
        onClick={() => navigate('/')}
      >
        <img
          className="w-7 h-7"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          alt="logo"
        />
        <h1 className="my-0">Amplify Boilerplate</h1>
      </div>

      <div className="flex-1" />

      <select
        className="cursor-pointer"
        value={i18n.language}
        onChange={(evt) => i18n.changeLanguage(evt.target.value)}
      >
        {appCtx.languages.map((language, index) => (
          <option key={index} value={language.value}>
            {language.title}
          </option>
        ))}
      </select>

      <FiBell
        className="text-xl cursor-pointer hover:opacity-70"
        onClick={() => navigate('/notification')}
      />

      <div
        className="flex items-center space-x-3 cursor-pointer hover:opacity-70"
        onClick={() => navigate('/account')}
      >
        <img
          className="w-7 h-7 rounded-full bg-white"
          src={`https://avatars.dicebear.com/api/identicon/${user.getUsername()}.svg`}
          alt="avatar"
        />
        <p className="m-0">{user.attributes?.email}</p>
      </div>
    </div>
  );
};
