import Link from 'next/link';
import { IconsFacebook } from './icons/icons-facebook';
import { IconsLinkedin } from './icons/icons-linkedin';
import { IconsTwitter } from './icons/icons-twitter';

export function Footer() {
  return (
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
  );
}
