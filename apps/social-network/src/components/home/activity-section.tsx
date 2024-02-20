'use client';

import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { IconsChatBubble } from '../icons/icons-chat-bubble';
import { IconsX } from '../icons/icons-x';
import { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../helpers/class-helper';
import { getPaginationParams, matchViewport } from '../../helpers/common';
import { CommentPreview } from '../../helpers/interfaces';
import { api } from '../../helpers/api';
import Image from 'next/image';
import { IconsImage } from '../icons/icons-image';

export function ActivitySection({ className }: HTMLAttributes<HTMLDivElement>) {
  const [activities, setActivities] = useState<CommentPreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getComments(getPaginationParams(1, matchViewport(1024) ? 4 : 6))
      .then((response) => {
        setActivities(response.data);
        setLoading(false);
      });
  }, []);

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
        {!loading
          ? activities.map((activity, i) => (
              <div
                key={i}
                className={cn(
                  'bg-accent/20 relative grid grid-cols-4 gap-2 rounded-sm border-2 border-transparent p-2 transition-all duration-75 ease-in-out md:bg-transparent',
                  'hover:before:border-t-accent hover:border-accent',
                  "hover:before:absolute hover:before:right-0 hover:before:top-0 hover:before:h-0 hover:before:w-0 hover:before:border-l-[2.5rem] hover:before:border-t-[2.5rem] hover:before:border-l-transparent hover:before:transition-all hover:before:duration-75 hover:before:ease-in-out hover:before:content-['']"
                )}
              >
                <Image
                  src={activity.owner.picture}
                  alt={activity.owner.firstName}
                  fill
                  sizes="100%"
                  className="bg-accent !static block aspect-[6/5] w-full rounded-sm object-cover object-center"
                ></Image>
                <div className="col-span-3 space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold">
                      {activity.owner.firstName} {activity.owner.lastName}
                    </span>
                    <span className="text-xs italic">commented</span>
                  </div>
                  <div className="truncate text-sm md:text-base">
                    {activity.message}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <IconsChatBubble className="h-4 w-4" />
                    <span>{activity.publishDate}</span>
                  </div>
                  <button className="text-primary absolute right-0 top-0 mr-1 mt-1">
                    <IconsX className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          : Array.from(Array(4)).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'bg-accent/20 relative grid grid-cols-4 gap-2 rounded-sm border-2 border-transparent p-2 transition-all duration-75 ease-in-out md:bg-transparent'
                )}
              >
                <div className="bg-accent text-primary flex aspect-[3/2] w-full  animate-pulse items-center justify-center rounded-sm">
                  <IconsImage className="h-6 w-6" />
                </div>
                <div className="col-span-3 flex flex-col items-stretch justify-between">
                  <div className="flex items-baseline gap-2">
                    <div className="bg-accent h-4 w-1/2 animate-pulse rounded-sm font-semibold"></div>
                    <div className="bg-accent h-3 w-1/6 animate-pulse rounded-sm text-xs italic"></div>
                  </div>
                  <div className="bg-accent h-4 w-2/3 animate-pulse truncate rounded-sm text-sm md:text-base"></div>
                  <div className="flex items-center gap-2 text-xs">
                    <IconsChatBubble className="h-4 w-4 animate-pulse" />
                    <span className="bg-accent h-4 w-1/3 animate-pulse rounded-sm"></span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
