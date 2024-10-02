import { Suspense } from 'react';
import {
  Advertising,
  AppropriateJob,
  Hero,
  Indicators,
  TargetGroups,
  EmployeerOrService,
  UaqEducativeOffer,
  Contact,
  Footer,
  LoadingIcon
} from "@/components";
import { CompanyAdvertising } from "@/interfaces";
import { fakeAdsCompanies } from "@/constants";

// Custom delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function getAdvertisingCompanies(): Promise<CompanyAdvertising[] | void> {
  // Simulate a delay
  await delay(3000); // 3 seconds delay
  return fakeAdsCompanies;
}

function LoadingComponent() {
  return (
    <div className="flex items-center justify-center my-auto pb-10">
      <LoadingIcon />
    </div>
  );
}

async function LandingPageContent() {
  const advertisingCompanies = await getAdvertisingCompanies();

  return (
    <main className="flex flex-col gap-48">
      <Hero />
      {
        advertisingCompanies
          ? <Advertising companies={advertisingCompanies} />
          : <></>
      }
      <Indicators />
      <AppropriateJob />
      <TargetGroups />
      <EmployeerOrService />
      <UaqEducativeOffer />
      <Contact />
      <Footer />
    </main>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LandingPageContent />
    </Suspense>
  );
}