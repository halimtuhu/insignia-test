import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';
import { HTMLAttributes } from 'react';
import { cn } from '../../helpers/class-helper';

export function PeopleSection({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4', className)}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Peoples</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>View all</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>
      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4">
        <div className="bg-accent text-primary flex aspect-[5/4] w-[45%] flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3">
          <h3 className="text-lg font-semibold">User Name</h3>
          <div className="text-sm">User Title</div>
        </div>
        <div className="bg-accent text-primary flex aspect-[5/4] w-[45%] flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3">
          <h3 className="text-lg font-semibold">User Name</h3>
          <div className="text-sm">User Title</div>
        </div>
        <div className="bg-accent text-primary flex aspect-[5/4] w-[45%] flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3">
          <h3 className="text-lg font-semibold">User Name</h3>
          <div className="text-sm">User Title</div>
        </div>
      </div>
    </div>
  );
}
