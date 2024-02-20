import Link from 'next/link';
import { Modal } from './modal';
import { IconsUpload } from './icons/icons-upload';
import { IconsLogOut } from './icons/icons-log-out';
import Image from 'next/image';

type Props = {
  show: boolean;
  onClose: () => void;
};

export function ProfileMenu({ show, onClose }: Props) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="relative flex w-full flex-col items-center">
        <div className="border-primary bg-accent relative z-10 aspect-square w-20 overflow-hidden rounded-lg border-2">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            fill
            sizes="100%"
          />
        </div>
        <div className="bg-accent text-primary -mt-12 flex w-full flex-col items-stretch rounded-lg pt-16">
          <div className="border-b-primary/25 mx-4 flex flex-col items-center border-b pb-4">
            <h3 className="font-bold">User Name</h3>
            <div className="text-sm">Title</div>
            <button className="bg-primary text-accent mt-4 flex w-full items-center justify-center gap-2 px-4 py-2">
              <IconsUpload />
              <span>Start Upload</span>
            </button>
          </div>
          <div className="mb-16">
            <Link
              href="#"
              className="hover:bg-primary/25 active:bg-primary/25 block p-4"
            >
              My Profile
            </Link>
            <Link
              href="#"
              className="hover:bg-primary/25 active:bg-primary/25 block p-4"
            >
              Edit Profile
            </Link>
            <Link
              href="#"
              className="hover:bg-primary/25 active:bg-primary/25 block p-4"
            >
              Security
            </Link>
          </div>
          <button className="bg-primary/5 text-primary border-t-primary/50 flex w-full items-center justify-center gap-2 border-t py-4">
            <IconsLogOut />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
