'use client';

import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { IconsX } from '../icons/icons-x';
import { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../helpers/class-helper';
import { matchViewport } from '../../helpers/common';

export function ChannelSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const [channels, setChannels] = useState<{ name: string }[]>([]);
  useEffect(() => {
    const response = [
      { name: 'Google' },
      { name: 'Dribble' },
      { name: 'Microsoft' },
      { name: 'Behance' },
      { name: 'Weather Channel' },
      { name: 'Gurus' },
      { name: 'iMedia' },
      { name: 'Creativeye' },
      { name: 'Khan Studios' },
      { name: 'Yahoo' },
    ];

    if (matchViewport(1024)) setChannels(response.slice(0, 9));
    else setChannels(response);
  }, []);

  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold md:text-lg">Channels</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browse all channel</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-2">
        {channels.map((channel, i) => (
          <div
            key={i}
            className={cn(
              'bg-accent text-primary relative flex aspect-[3/2] items-center justify-center rounded-sm p-2 md:items-end md:justify-start',
              "hover:before:border-t-primary/90 hover:before:absolute hover:before:right-0 hover:before:top-0 hover:before:h-0 hover:before:w-0 hover:before:border-l-[2rem] hover:before:border-t-[2rem] hover:before:border-l-transparent hover:before:transition-all hover:before:duration-75 hover:before:ease-in-out hover:before:content-['']"
            )}
          >
            <h3 className="text-center text-xs font-semibold md:text-left">
              {channel.name}
            </h3>
            <button className="text-accent absolute right-0 top-0 mr-0.5 mt-0.5">
              <IconsX className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
