import Link from 'next/link';
import { Modal } from './modal';

type Props = {
  show: boolean;
  onClose: () => void;
};

export function MainMenu({ show, onClose }: Props) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="bg-accent text-primary w-full rounded-lg">
        <h3 className="border-b-primary/50 mx-4 border-b p-4 text-center font-semibold">
          Main Menu
        </h3>
        <div>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Videos
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            People
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Documents
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Events
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Communities
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Favorites
          </Link>
          <Link
            href="#"
            className="hover:bg-primary/25 active:bg-primary/25 block p-4"
          >
            Channels
          </Link>
        </div>
      </div>
    </Modal>
  );
}
