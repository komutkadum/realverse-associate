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
          <title>Company Annual Filings - Realverse Associate</title>
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
            href="https://www.realverseassociates.in/company-annual-filings"
          />
        </Head>
        <CategoryPageCTA
          title="Company Annual Compliances"
          price="6,999"
          caption="Valid for . One financial year . at a single click"
        >
          <li>Private Limited Company</li>
          <li>One Person Company</li>
          <li>Limited Liability Partnerships</li>
          <li>Businesses looking to raise funds</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              For LLP / PLC / OPC
            </li>
            <li className="mb-2">Preparation of Board Resolution</li>
            <li>Preparation of Minutes of Meetings</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">For LLPs</li>
            <li className="mb-2">Preparation and Filing of Form 11</li>
            <li>Preparation and Filing of Form 8</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">For PLC & OPC </li>
            <li className="mb-2">Preparation and Filing of Form AOC - 4</li>
            <li>Preparation and Filing of Form MGT - 7</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Shareholding Pattern & It&apos;s Changes</li>
            <li className="mb-2">Auditor&apos;s Report</li>
            <li>Director&apos;s Report</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">LLP Partner&apos;s Declaration</li>
            <li className="mb-2">Loan Sanction Letters</li>
            <li>Loan Documents</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">20% off on:</li>
            <li className="mb-2">Investor Pitch Deck</li>
            <li>Start-up (DPIIT) Registration</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
