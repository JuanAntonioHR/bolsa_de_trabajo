import {
  Advertising,
  AppropriateJob,
  Hero,
  Indicators,
  TargetGroups,
  EmployeerOrService,
  UaqEducativeOffer,
  Contact
} from "@/components";
import { CompanyAdvertising } from "@/interfaces";
import { fakeAdsCompanies } from "@/constants";

async function getAdvertisingCompanies(): Promise<CompanyAdvertising[] | void> {
  // fetch to have companies that have purchased the ads section
  // If something wrong, then return void
  // return;

  return fakeAdsCompanies;
}

export default async function LandingPage() {

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
    </main>
  );
}