import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { IconsChatBubble } from '../icons/icons-chat-bubble';
import { IconsX } from '../icons/icons-x';

export function ActivitySection() {
  return (
    <div className="mb-8 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Activities</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>View Timeline</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>
      <div className="space-y-3">
        <div className="bg-accent/20 grid grid-cols-4 gap-2 rounded-sm p-2">
          <div className="bg-accent aspect-square w-full rounded-sm"></div>
          <div className="col-span-3 space-y-1">
            <div className="flex items-center gap-1">
              <span className="font-semibold">User Name</span>
              <span className="text-sm italic">Commented</span>
            </div>
            <div className="truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              ratione nostrum quasi, eligendi magnam voluptate dignissimos, ab
              perferendis repellat architecto et blanditiis est, eveniet amet!
            </div>
            <div className="flex items-center gap-2 text-xs">
              <IconsChatBubble className="h-4 w-4" />
              <span>5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="bg-accent/20 border-accent before:border-t-accent relative grid grid-cols-4 gap-2 rounded-sm border-2 p-2 before:absolute before:right-0 before:top-0 before:h-0 before:w-0 before:border-l-[2.5rem] before:border-t-[2.5rem] before:border-l-transparent before:content-['']">
          <div className="bg-accent aspect-square w-full rounded-sm"></div>
          <div className="col-span-3 space-y-1">
            <div className="flex items-center gap-1">
              <span className="font-semibold">User Name</span>
              <span className="text-sm italic">Commented</span>
            </div>
            <div className="truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              ratione nostrum quasi, eligendi magnam voluptate dignissimos, ab
              perferendis repellat architecto et blanditiis est, eveniet amet!
            </div>
            <div className="flex items-center gap-2 text-xs">
              <IconsChatBubble className="h-4 w-4" />
              <span>5 minutes ago</span>
            </div>
          </div>
          <button className="text-primary absolute right-0 top-0 mr-1 mt-1">
            <IconsX className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
