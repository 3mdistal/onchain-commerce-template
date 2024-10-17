import { Banner } from './Banner';
import Navbar from './Navbar';
import OnchainStoreCart from './OnchainStoreCart';
import OnchainStoreItems from './OnchainStoreItems';
import { OnchainStoreProvider } from './OnchainStoreProvider';
import OnchainStoreSummary from './OnchainStoreSummary';

export default function OnchainStore() {
  return (
    <OnchainStoreProvider>
      <div className="flex h-full max-h-screen max-w-full flex-col font-sansMono">
        <Banner />
        <Navbar />
        <main className="mx-auto flex max-w-5xl grow flex-col pt-20 pb-10">
          <div className="flex grow flex-col pb-10 md:flex-row">
            <OnchainStoreSummary />
            <OnchainStoreItems />
          </div>
          <OnchainStoreCart />
        </main>
      </div>
    </OnchainStoreProvider>
  );
}
