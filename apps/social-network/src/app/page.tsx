import { Header } from '../components/header';
import { InputSearch } from '../components/forms/input-search';
import { VideoSection } from '../components/home/video-section';
import { ActivitySection } from '../components/home/activity-section';
import { PeopleSection } from '../components/home/people-section';
import { ChannelSection } from '../components/home/channel-section';
import { DocumentSection } from '../components/home/document-section';
import { Footer } from '../components/footer';

export default async function Index() {
  return (
    <main className="bg-primary text-accent font-poppins max-h-full min-h-screen pb-8">
      <Header />

      <div className="mb-8 px-4">
        <InputSearch />
      </div>

      <VideoSection />

      <ActivitySection />

      <PeopleSection />

      <ChannelSection />

      <DocumentSection />

      <Footer />
    </main>
  );
}
