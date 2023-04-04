import CategoryLayout from '@/components/layout/CategoryLayout';
import {
  CategoryPageCTA,
  CategoryPageWhatsIncluded,
} from '@/components/utility/CategoryPageUtility';
import WhyChoose from '@/components/utility/WhyChoose';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <CategoryLayout>
        <Head>
          <title>Trademark Registration Services - Realverse Associate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <CategoryPageCTA
          title="Trademark Registration"
          subtitle="Safeguard your brand:"
          price="6,299"
        >
          <li>Sell better on E-commerce Websites</li>
          <li>Build trust towards your Brand</li>
          <li>Protection against Counterfeits / Fakes</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Consultation by Professional</li>
            <li className="mb-2">IP Search Availability Check</li>
            <li>Drafting of Documents</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Government Fees</li>
            <li className="mb-2">Filing of Application</li>
            <li>Application within 3 days*</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free MSME / Udyam Registration</li>
            <li className="mb-2">Free GST Registration</li>
            <li>Free Import Export Code (IEC)</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-primary-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              Applicant Related
            </li>
            <li className="mb-2">Applicant&apos;s PAN Card</li>
            <li className="mb-2">Applicant&apos;s Address Proof</li>
            <li className="mb-2">
              Certificate of Registration (Non-Individual)
            </li>
            <li>Udyam Registration / DPIIT Registration (If any)</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">IP Related</li>
            <li className="mb-2">Brand Name and Logo</li>
            <li className="mb-2">User Affiidavit</li>
            <li className="mb-2">Proof of Use of TM</li>
            <li>Form TM-48 (Verified & Signed)</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
