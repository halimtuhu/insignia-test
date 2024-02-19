'use client';

import { useState } from 'react';
import IconsThreeBar from './icons/icons-three-bar';
import { IconsUpload } from './icons/icons-upload';
import { IconsUser } from './icons/icons-user';
import { MainMenu } from './main-menu';
import { ProfileMenu } from './profile-menu';
import { InputSearch } from './forms/input-search';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="grid grid-cols-4 gap-2 p-4 md:flex md:items-center md:justify-center md:gap-4 md:px-0">
        <div className="text-left md:hidden">
          <button onClick={() => setShowMenu(true)}>
            <IconsThreeBar />
          </button>
        </div>
        <h1 className="col-span-2 text-center md:flex-1 md:text-left md:text-2xl">
          <b className="font-semibold">Social</b>Network
        </h1>
        <InputSearch className="relative hidden h-10 w-full max-w-96 md:block" />
        <button className="bg-accent text-primary hidden h-10 items-center justify-center gap-2 rounded-sm px-4 md:flex">
          <IconsUpload />
          <span>Upload</span>
        </button>
        <div className="relative hidden gap-2 md:flex md:items-center">
          <div className="bg-accent aspect-square h-10 rounded-sm"></div>
          <div>
            <div className="font-semibold">Halimtuhu</div>
            <div className="text-xs">Prasetyo</div>
          </div>
          <div className="bg-accent text-primary absolute right-0 top-0 -mr-7 -mt-2 flex aspect-square h-6 items-center justify-center rounded-full text-xs">
            12
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 md:hidden">
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
