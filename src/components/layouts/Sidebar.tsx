import { useContext, useEffect, useState, useRef } from 'react';

import { FiHome, FiBell, FiUser } from 'react-icons/fi';

import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col py-10">
      <SidebarItem icon={<FiHome />} label="Home" path="/" />
      <SidebarItem
        icon={<FiBell />}
        label="Notification"
        path="/notification"
      />
      <SidebarItem icon={<FiUser />} label="Account" path="/account" />
    </div>
  );
};
