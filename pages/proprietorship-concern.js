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
          <title>Proprietorship Concern Services - Realverse Associate</title>
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
            href="https://www.realverseassociates.in/proprietorship-concern"
          />
        </Head>
        <CategoryPageCTA title="Proprietorship Concern" price="2,999">
          <li>Small / Micro Businesses</li>
          <li>Testing / Dry Runs of Business Ideas</li>
          <li>Businesses running on the promoter’s name</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free GST Registration</li>
            <li className="mb-2">Free Import Export Code (IEC)</li>
            <li className="mb-2">Free Udyog Aadhar Certificate</li>
            <li>Free PTEC Registration</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Current Account Opening</li>
            <li className="mb-2">Rubber Stamp</li>
            <li className="mb-2">Letter Head</li>
            <li>GST Invoice Format</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">20% Discount on: </li>
            <li className="mb-2">Annual Accounting & MIS</li>
            <li className="mb-2">Annual GST Filings</li>
            <li>Private Limited Registration</li>
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
