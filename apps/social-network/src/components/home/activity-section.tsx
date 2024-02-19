import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { IconsChatBubble } from '../icons/icons-chat-bubble';
import { IconsX } from '../icons/icons-x';
import { HTMLAttributes } from 'react';
import { cn } from '../../helpers/class-helper';

export function ActivitySection({ className }: HTMLAttributes<HTMLDivElement>) {
  const activities = [
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
    {
      user: 'User Name',
      status: 'commented',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      timestamp: '5 minutes ago',
    },
  ];

  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold md:text-lg">Activities</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>View Timeline</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>

      <div className="lg:border-b-accent space-y-2 md:space-y-0 lg:border-b lg:pb-2">
        {activities.map((activity, i) => (
          <div
            key={i}
            className={cn(
              'bg-accent/20 relative grid grid-cols-4 gap-2 rounded-sm border-2 border-transparent p-2 transition-all duration-75 ease-in-out md:bg-transparent',
              'hover:before:border-t-accent hover:border-accent',
              "hover:before:absolute hover:before:right-0 hover:before:top-0 hover:before:h-0 hover:before:w-0 hover:before:border-l-[2.5rem] hover:before:border-t-[2.5rem] hover:before:border-l-transparent hover:before:transition-all hover:before:duration-75 hover:before:ease-in-out hover:before:content-['']"
            )}
          >
            <div className="bg-accent aspect-[6/5] w-full rounded-sm"></div>
            <div className="col-span-3">
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
              <button className="text-primary absolute right-0 top-0 mr-1 mt-1">
                <IconsX className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
