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
          <title>Private Limited Company Services - Realverse Associate</title>
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
            href="https://www.realverseassociates.in/limited-liability-partnership"
          />
        </Head>
        <CategoryPageCTA title="Limited Liability Partnership" price="4,999">
          <li>Limited Liability</li>
          <li>Businesses with multiple Co-founders</li>
          <li>Lesser Compliances</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free GST Registration</li>
            <li className="mb-2">Free Import Export Code (IEC)</li>
            <li className="mb-2">Free Udyog Aadhar Certificate</li>
            <li>Free PT Registration</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">LLP Deed / Agreement</li>
            <li className="mb-2">Certificate of Incorporation</li>
            <li className="mb-2">Free PAN Application</li>
            <li>Free TAN Application</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">DIN for upto 2 Partners</li>
            <li className="mb-2">Digital Signatures (upto 2)</li>
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
