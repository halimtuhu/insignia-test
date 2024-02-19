import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { cn } from '../../helpers/class-helper';
import { HTMLAttributes } from 'react';
import { IconsCircleArrow } from '../icons/icons-circle-arrow';

export function VideoSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const videos = [
    { title: 'Video Title', author: 'the Author', views: '10k views' },
    { title: 'Video Title', author: 'the Author', views: '10k views' },
    { title: 'Video Title', author: 'the Author', views: '10k views' },
    { title: 'Video Title', author: 'the Author', views: '10k views' },
    { title: 'Video Title', author: 'the Author', views: '10k views' },
  ];

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
            className="bg-accent text-primary flex aspect-video w-3/4 flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3 md:h-full md:w-full first:md:col-span-2 first:md:row-span-2 first:md:aspect-auto"
          >
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <div className="text-sm">{video.author}</div>
            <div className="text-xs font-semibold">{video.views}</div>
          </div>
        ))}
        <button className="bg-primary text-accent border-accent hidden aspect-video w-3/4 flex-none items-center justify-center gap-2 rounded-sm border p-3 md:flex md:h-full md:w-full">
          <IconsCircleArrow className="h-6 w-6" direction="up" />
          <span>Show Your Work</span>
        </button>
      </div>
    </div>
  );
}
