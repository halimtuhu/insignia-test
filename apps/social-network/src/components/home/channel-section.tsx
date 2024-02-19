import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { IconsX } from '../icons/icons-x';

export function ChannelSection() {
  return (
    <div className="mb-8 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Channels</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browse all channel</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
          <h3 className="font-semibold">Google</h3>
        </div>
        <div className="bg-accent text-primary before:border-t-primary relative flex items-start justify-center rounded-sm p-5 before:absolute before:right-0 before:top-0 before:h-0 before:w-0 before:border-l-[2rem] before:border-t-[2rem] before:border-l-transparent before:content-['']">
          <h3 className="font-semibold">Dribble</h3>
          <button className="text-accent absolute right-0 top-0 mr-0.5 mt-0.5">
            <IconsX className="h-4 w-4" />
          </button>
        </div>
        <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
          <h3 className="font-semibold">Youtube</h3>
        </div>
        <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
          <h3 className="font-semibold">Google</h3>
        </div>
        <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
          <h3 className="font-semibold">Dribble</h3>
        </div>
        <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
          <h3 className="font-semibold">Youtube</h3>
        </div>
      </div>
    </div>
  );
}
