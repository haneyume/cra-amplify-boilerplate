import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

export const SidebarItem = ({
  icon,
  label,
  path,
}: {
  icon: React.ReactNode;
  label: string;
  path: string;
}) => {
  const navigate = useNavigate();

  const { pathname } = window.location;
  const isActive = pathname === path;

  return (
    <div
      className={clsx(
        'px-5 py-3 flex items-center space-x-3 cursor-pointer hover:opacity-70',
        isActive && 'bg-[#333]',
      )}
      onClick={() => navigate(path)}
    >
      {icon}
      <div>{label}</div>
    </div>
  );
};
