'use client';

import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../helpers/class-helper';
import { IconsCircleUser } from '../icons/icons-circle-user';
import { UserPreview } from '../../helpers/interfaces';
import { api } from '../../helpers/api';
import { getPaginationParams } from '../../helpers/common';
import Image from 'next/image';

export function PeopleSection({ className }: HTMLAttributes<HTMLDivElement>) {
  const [peoples, setPeoples] = useState<UserPreview[]>([]);

  useEffect(() => {
    api
      .getUsers(getPaginationParams(1, 5))
      .then((response) => setPeoples(response.data));
  });

  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold md:text-lg">Peoples</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>View all</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>

      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:grid-rows-3 md:px-0">
        {peoples.map((people, i) => (
          <div
            key={i}
            className="bg-accent text-primary relative flex aspect-[4/3] w-[45%] flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3 md:h-full md:w-full first:md:col-span-2 first:md:row-span-2 first:md:aspect-auto"
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
              fill
              sizes="100%"
              src={people.picture}
              alt={people.firstName}
            />
            <h3 className="relative font-semibold md:text-lg">
              {people.title} {people.firstName}
            </h3>
            <div className="relative text-sm">{people.lastName}</div>
          </div>
        ))}
        <button className="bg-primary text-accent border-accent hidden aspect-video h-full w-full flex-none items-center gap-2 rounded-sm border p-8 md:flex">
          <IconsCircleUser className="h-10 w-10" direction="up" />
          <div className="text-left">
            Show
            <br />
            Your Work
          </div>
        </button>
      </div>
    </div>
  );
}
