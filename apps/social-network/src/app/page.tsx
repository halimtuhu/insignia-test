import Link from 'next/link';
import { IconsSearch } from '../components/icons/icons-search';
import IconsThreeBar from '../components/icons/icons-three-bar';
import { IconsUpload } from '../components/icons/icons-upload';
import { IconsUser } from '../components/icons/icons-user';
import { IconsArrow } from '../components/icons/icons-arrow';
import { IconsChatBubble } from '../components/icons/icons-chat-bubble';
import { IconsX } from '../components/icons/icons-x';
import { IconsFacebook } from '../components/icons/icons-facebook';
import { IconsTwitter } from '../components/icons/icons-twitter';
import { IconsLinkedin } from '../components/icons/icons-linkedin';

export default async function Index() {
  return (
    <main className="bg-primary text-accent font-poppins max-h-full min-h-screen pb-8">
      <header className="grid grid-cols-4 gap-2 p-4">
        <div className="text-left">
          <button>
            <IconsThreeBar />
          </button>
        </div>
        <h1 className="col-span-2 text-center">
          <b className="font-semibold">Social</b>Network
        </h1>
        <div className="flex items-center justify-end gap-4">
          <button>
            <IconsUpload />
          </button>
          <button>
            <IconsUser />
          </button>
        </div>
      </header>

      <div className="mb-8 px-4">
        <div className="relative">
          <input
            type="text"
            className="bg-accent placeholder:text-primary w-full rounded-sm p-2"
            placeholder="Find"
          />
          <IconsSearch className="text-primary absolute right-0 top-0 mr-2 mt-2 h-5 w-5" />
        </div>
      </div>

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

      <div className="mb-8 px-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">Activities</h3>
          <Link href="#" className="flex items-center gap-2">
            <span>View Timeline</span>
            <IconsArrow direction="right" className="w-h4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          <div className="bg-accent/20 grid grid-cols-4 gap-2 rounded-sm p-2">
            <div className="bg-accent aspect-square w-full rounded-sm"></div>
            <div className="col-span-3 space-y-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold">User Name</span>
                <span className="text-sm italic">Commented</span>
              </div>
              <div className="truncate">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                ratione nostrum quasi, eligendi magnam voluptate dignissimos, ab
                perferendis repellat architecto et blanditiis est, eveniet amet!
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IconsChatBubble className="h-4 w-4" />
                <span>5 minutes ago</span>
              </div>
            </div>
          </div>
          <div className="bg-accent/20 border-accent before:border-t-accent relative grid grid-cols-4 gap-2 rounded-sm border-2 p-2 before:absolute before:right-0 before:top-0 before:h-0 before:w-0 before:border-l-[2.5rem] before:border-t-[2.5rem] before:border-l-transparent before:content-['']">
            <div className="bg-accent aspect-square w-full rounded-sm"></div>
            <div className="col-span-3 space-y-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold">User Name</span>
                <span className="text-sm italic">Commented</span>
              </div>
              <div className="truncate">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                ratione nostrum quasi, eligendi magnam voluptate dignissimos, ab
                perferendis repellat architecto et blanditiis est, eveniet amet!
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IconsChatBubble className="h-4 w-4" />
                <span>5 minutes ago</span>
              </div>
            </div>
            <button className="text-primary absolute right-0 top-0 mr-1 mt-1">
              <IconsX className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8 px-4">
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

      <div className="mb-8 px-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">Channels</h3>
          <Link href="#" className="flex items-center gap-2">
            <span>Browse all channel</span>
            <IconsArrow direction="right" className="w-h4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
            <h3 className="font-semibold">Google</h3>
          </div>
          <div className="bg-accent text-primary before:border-t-primary relative flex items-start justify-center rounded-sm p-5 before:absolute before:right-0 before:top-0 before:h-0 before:w-0 before:border-l-[2rem] before:border-t-[2rem] before:border-l-transparent before:content-['']">
            <h3 className="font-semibold">Dribble</h3>
            <button className="text-accent absolute right-0 top-0 mr-0.5 mt-0.5">
              <IconsX className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
            <h3 className="font-semibold">Youtube</h3>
          </div>
          <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
            <h3 className="font-semibold">Google</h3>
          </div>
          <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
            <h3 className="font-semibold">Dribble</h3>
          </div>
          <div className="bg-accent text-primary flex items-start justify-center rounded-sm p-5">
            <h3 className="font-semibold">Youtube</h3>
          </div>
        </div>
      </div>

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

      <footer className="border-t-accent mx-4 border-t py-4">
        <div className="mb-4 flex items-center justify-center gap-4">
          <Link
            href="#"
            className="bg-accent text-primary flex h-6 w-6 items-center justify-center rounded-sm"
          >
            <IconsFacebook className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="bg-accent text-primary flex h-6 w-6 items-center justify-center rounded-sm"
          >
            <IconsTwitter className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="bg-accent text-primary flex h-6 w-6 items-center justify-center rounded-sm"
          >
            <IconsLinkedin className="h-4 w-4" />
          </Link>
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="#">About</Link>
          <Link href="#">For Business</Link>
          <Link href="#">Suggestions</Link>
          <Link href="#">Help & FAQs</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Pricing</Link>
        </div>
        <div className="mb-1 text-center text-xs">
          © Copyright 2023 SocialNetwork Inc.
        </div>
        <div className="flex items-center justify-center gap-4 text-xs">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </footer>
    </main>
  );
}
