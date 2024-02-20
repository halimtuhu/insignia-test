'use client';

import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { cn } from '../../helpers/class-helper';
import { HTMLAttributes, useEffect, useState } from 'react';
import { IconsCircleArrow } from '../icons/icons-circle-arrow';
import { PostPreview } from '../../helpers/interfaces';
import { api } from '../../helpers/api';
import Image from 'next/image';
import { getPaginationParams } from '../../helpers/common';

export function VideoSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const [videos, setVideos] = useState<PostPreview[]>([]);

  useEffect(() => {
    api
      .getPosts(getPaginationParams(1, 5))
      .then((response) => setVideos(response.data));
  }, []);

  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold md:text-lg">Videos</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browser all videos</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>

      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:grid-rows-3 md:px-0">
        {videos.map((video, i) => (
          <div
            key={i}
            className={cn(
              'bg-accent text-primary relative flex aspect-video w-3/4 flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3',
              'md:aspect-[4/3] md:h-full md:w-full',
              'first:md:col-span-2 first:md:row-span-2 first:md:aspect-auto'
            )}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
              fill
              sizes="100%"
              src={video.image}
              alt={video.text}
            />
            <h3 className="relative font-semibold md:text-lg">{video.text}</h3>
            <div className="relative text-sm">
              {video.owner.firstName} {video.owner.lastName}
            </div>
            <div className="relative text-xs font-semibold">
              {video.likes} views
            </div>
          </div>
        ))}
        <button className="bg-primary text-accent border-accent hidden aspect-video w-3/4 flex-none items-center gap-2 rounded-sm border p-8 md:flex md:h-full md:w-full">
          <IconsCircleArrow className="h-10 w-10" direction="up" />
          <div className="text-left">
            Upload
            <br />
            Your Own Video
          </div>
        </button>
      </div>
    </div>
  );
}
