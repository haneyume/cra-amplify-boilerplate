import { useContext, useEffect, useState, useRef } from 'react';

import { FiGithub, FiTwitter } from 'react-icons/fi';

export const Footer = () => {
  return (
    <div className="w-full h-full flex items-center px-10 space-x-5">
      <p className="my-0">Staus: Ready</p>

      <div className="flex-1" />

      <FiGithub
        className="cursor-pointer hover:opacity-70"
        onClick={() => {
          window.open('https://github.com/', '_blank')?.focus();
        }}
      />

      <FiTwitter
        className="cursor-pointer hover:opacity-70"
        onClick={() => {
          window.open('https://twitter.com/', '_blank')?.focus();
        }}
      />
    </div>
  );
};
