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
          <title>
            Private Limited Company Registration | Register a Company Online
          </title>
          <meta
            name="description"
            content="Realverse Associates is the leading Online Company Registration Consultants services in Bangalore with trusted advisors for Taxation, Fund Raise Compliance &amp; Company Set-up Services all over India."
          />
          <meta
            name="keywords"
            content="efiling tax, income efiling, income tax efiling, efile taxes india, efiling india, india tax efiling, income tax filing cleartax, Realverse Associate itr filing, Realverse Associate itr efiling, itr filing fy 2022-23, income tax filing fy 2022-23, Realverse Associate"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
          <link
            rel="canonical"
            href="https://www.realverseassociates.in/private-limited-company"
          />
        </Head>
        <CategoryPageCTA title="Private Limited Company" price="4,999">
          <li>Start-ups & Businesses looking for investors</li>
          <li>Businesses with multiple Co-founders</li>
          <li>Better Tax Planning</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Company Name Approval (RUN)</li>
            <li className="mb-2">eMOA & eAOA</li>
            <li className="mb-2">Certificate of Incorporation</li>
            <li>Share Certificate (1st Subscribers)</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">DIN for upto 2 Directors</li>
            <li className="mb-2">Digital Signatures (upto 2)</li>
            <li className="mb-2">Company PAN and TAN</li>
            <li>Current Account Assistance</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free GST Registration</li>
            <li className="mb-2">Free MSME / Udyam Registration</li>
            <li className="mb-2">Free Import Export Code (IEC)</li>
            <li>Free PTEC Registrations</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Latest Electricity Bill (Business Place)</li>
            <li className="mb-2">Copy of Rent Agreement</li>
            <li className="mb-2">NOC from Owner</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">PAN Card</li>
            <li className="mb-2">Aadhar Card / Voter ID / Passport</li>
            <li className="mb-2">Passport Size Photo(s)</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Latest Bank Statement</li>
            <li className="mb-2">Electricity/Mobile/Telephone/Gas Bill</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
