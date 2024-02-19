import Link from 'next/link';
import { IconsArrow } from '../icons/icons-arrow';

export function VideoSection() {
  return (
    <div className="mb-8 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Videos</h3>
        <Link href="#" className="flex items-center gap-2">
          <span>Browser all videos</span>
          <IconsArrow direction="right" className="w-h4 h-4" />
        </Link>
      </div>
      <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4">
        <div className="bg-accent text-primary flex aspect-video w-3/4 flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3">
          <h3 className="text-lg font-semibold">Video Title</h3>
          <div className="text-sm">Author</div>
          <div className="text-xs font-semibold">10k views</div>
        </div>
        <div className="bg-accent text-primary flex aspect-video w-3/4 flex-none flex-col items-start justify-end gap-0.5 rounded-sm p-3">
          <h3 className="text-lg font-semibold">Video Title</h3>
          <div className="text-sm">Author</div>
          <div className="text-xs font-semibold">10k views</div>
        </div>
      </div>
    </div>
  );
}
