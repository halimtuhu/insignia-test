'use client';

import { useState } from 'react';
import IconsThreeBar from './icons/icons-three-bar';
import { IconsUpload } from './icons/icons-upload';
import { IconsUser } from './icons/icons-user';
import { MainMenu } from './main-menu';
import { ProfileMenu } from './profile-menu';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="grid grid-cols-4 gap-2 p-4">
        <div className="text-left">
          <button onClick={() => setShowMenu(true)}>
            <IconsThreeBar />
          </button>
        </div>
        <h1 className="col-span-2 text-center">
          <b className="font-semibold">Social</b>Network
        </h1>
        <div className="flex items-center justify-end gap-4">
          <button>
            <IconsUpload />
          </button>
          <button onClick={() => setShowProfile(true)}>
            <IconsUser />
          </button>
        </div>
      </header>

      <MainMenu show={showMenu} onClose={() => setShowMenu(false)} />
      <ProfileMenu show={showProfile} onClose={() => setShowProfile(false)} />
    </>
  );
}
