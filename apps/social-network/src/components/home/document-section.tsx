import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';

export function DocumentSection() {
  return (
    <div className="mb-8 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Documents</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browse all</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>
      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4">
        <div className="bg-accent text-primary flex aspect-[5/6] w-[45%] flex-none flex-col items-start justify-end rounded-sm p-3">
          <h3 className="text-sm font-semibold">Document Title Long</h3>
          <div className="text-sm">Document Category</div>
          <hr className="bg-primary my-1 h-0.5 w-4" />
          <div className="text-xs font-semibold">12k views</div>
        </div>
        <div className="bg-accent text-primary flex aspect-[5/6] w-[45%] flex-none flex-col items-start justify-end rounded-sm p-3">
          <h3 className="text-sm font-semibold">Document Title Long</h3>
          <div className="text-sm">Document Category</div>
          <hr className="bg-primary my-1 h-0.5 w-4" />
          <div className="text-xs font-semibold">12k views</div>
        </div>
        <div className="bg-accent text-primary flex aspect-[5/6] w-[45%] flex-none flex-col items-start justify-end rounded-sm p-3">
          <h3 className="text-sm font-semibold">Document Title Long</h3>
          <div className="text-sm">Document Category</div>
          <hr className="bg-primary my-1 h-0.5 w-4" />
          <div className="text-xs font-semibold">12k views</div>
        </div>
      </div>
    </div>
  );
}
