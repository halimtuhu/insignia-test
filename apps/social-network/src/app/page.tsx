import { Header } from '../components/header';
import { InputSearch } from '../components/forms/input-search';
import { VideoSection } from '../components/home/video-section';
import { ActivitySection } from '../components/home/activity-section';
import { PeopleSection } from '../components/home/people-section';
import { ChannelSection } from '../components/home/channel-section';
import { DocumentSection } from '../components/home/document-section';
import { Footer } from '../components/footer';
import Link from 'next/link';

export default async function Index() {
  return (
    <main className="bg-primary text-accent font-poppins max-h-full min-h-screen pb-8 md:px-8 lg:px-12 xl:px-32">
      <Header />

      <div className="mb-8 px-4 md:hidden">
        <InputSearch />
      </div>

      <div className="border-accent my-6 hidden items-center gap-4 border-y py-2 md:flex">
        <Link href="#">Videos</Link> <div>/</div>
        <Link href="#">People</Link> <div>/</div>
        <Link href="#">Documents</Link> <div>/</div>
        <Link href="#">Events</Link> <div>/</div>
        <Link href="#">Communities</Link> <div>/</div>
        <Link href="#">Favorites</Link> <div>/</div>
        <Link href="#">Channels</Link>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-3">
        <VideoSection className="lg:col-span-2 lg:p-0" />
        <ActivitySection className="lg:col-span-1 lg:p-0" />
        <PeopleSection className="lg:col-span-2 lg:p-0" />
        <ChannelSection className="lg:col-span-1 lg:row-span-2 lg:p-0" />
        <DocumentSection className="lg:col-span-2 lg:p-0" />
      </div>

      <Footer />
    </main>
  );
}
