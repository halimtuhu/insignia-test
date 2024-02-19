import IconsThreeBar from './icons/icons-three-bar';
import { IconsUpload } from './icons/icons-upload';
import { IconsUser } from './icons/icons-user';

export function Header() {
  return (
    <header className="grid grid-cols-4 gap-2 p-4">
      <div className="text-left">
        <button>
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
        <button>
          <IconsUser />
        </button>
      </div>
    </header>
  );
}
