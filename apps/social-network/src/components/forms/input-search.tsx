import { HTMLAttributes } from 'react';
import { IconsSearch } from '../icons/icons-search';

export function InputSearch({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className || 'relative'}>
      <input
        type="text"
        className="bg-accent placeholder:text-primary w-full rounded-sm p-2"
        placeholder="Find"
      />
      <IconsSearch className="text-primary absolute right-0 top-0 mr-2 mt-2 h-5 w-5" />
    </div>
  );
}
