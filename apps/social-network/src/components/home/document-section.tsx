'use client';

import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../helpers/class-helper';
import { IconsCirclePlus } from '../icons/icons-circle-plus';
import { PostPreview } from '../../helpers/interfaces';
import { api } from '../../helpers/api';
import { getPaginationParams } from '../../helpers/common';
import Image from 'next/image';

export function DocumentSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const [documents, setDocuments] = useState<PostPreview[]>([]);

  useEffect(() => {
    api
      .getPosts(getPaginationParams(1, 5))
      .then((res) => setDocuments(res.data));
  });

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
            className="bg-accent text-primary relative flex aspect-[5/6] w-[45%] flex-none flex-col items-start justify-end rounded-sm p-3 first:col-span-2 first:row-span-2 md:aspect-[4/3] md:h-full md:w-full"
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
              fill
              src={document.image}
              alt={document.text}
            />
            <h3 className="relative text-sm font-semibold">{document.text}</h3>
            <div className="relative text-sm">{document.tags.join(' ')}</div>
            <hr className="bg-primary relative my-1 h-0.5 w-4" />
            <div className="relative text-xs font-semibold">
              {document.likes} views
            </div>
          </div>
        ))}
        <button className="bg-primary text-accent border-accent hidden aspect-video h-full w-full flex-none items-center gap-2 rounded-sm border p-8 md:flex">
          <IconsCirclePlus className="h-10 w-10" direction="up" />
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
