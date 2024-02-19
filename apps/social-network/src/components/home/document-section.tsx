import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { HTMLAttributes } from 'react';
import { cn } from '../../helpers/class-helper';
import { IconsCircleArrow } from '../icons/icons-circle-arrow';

export function DocumentSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const documents = [
    { title: 'Long Document Title', category: 'Category', views: '22k views' },
    { title: 'Long Document Title', category: 'Category', views: '22k views' },
    { title: 'Long Document Title', category: 'Category', views: '22k views' },
    { title: 'Long Document Title', category: 'Category', views: '22k views' },
    { title: 'Long Document Title', category: 'Category', views: '22k views' },
  ];

  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold md:text-lg">Documents</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browse all</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>

      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:grid-rows-3 md:px-0">
        {documents.map((document, i) => (
          <div
            key={i}
            className="bg-accent text-primary flex aspect-[5/6] w-[45%] flex-none flex-col items-start justify-end rounded-sm p-3 first:col-span-2 first:row-span-2 md:aspect-[4/3] md:h-full md:w-full"
          >
            <h3 className="text-sm font-semibold">{document.title}</h3>
            <div className="text-sm">{document.category}</div>
            <hr className="bg-primary my-1 h-0.5 w-4" />
            <div className="text-xs font-semibold">{document.views}</div>
          </div>
        ))}
        <button className="bg-primary text-accent border-accent hidden aspect-video h-full w-full flex-none items-center gap-2 rounded-sm border p-8 md:flex">
          <IconsCircleArrow className="h-10 w-10" direction="up" />
          <div className="text-left">
            Share
            <br />
            Your Document
          </div>
        </button>
      </div>
    </div>
  );
}
