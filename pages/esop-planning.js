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
          <title>ESOP Planning Services - Realverse Associate</title>
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
            href="https://www.realverseassociates.in/esop-planning"
          />
        </Head>
        <CategoryPageCTA
          title="ESOP Planning"
          price="499"
          caption="In 7 days . From Any where . At a Single Click"
        >
          <li>Start-ups looking to hire top-talents</li>
          <li>Method to set-up co-founders remunerations</li>
          <li>Companies looking to retain top employees</li>
          <li>Saving cash flows for start-ups</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Identification of Top Employees</li>
            <li className="mb-2">Calculating Eligibility</li>
            <li className="mb-2">Determine the Dilution</li>
            <li>Structuring the Vesting plan</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Model contract for ESOP</li>
            <li className="mb-2">Communication Techniques</li>
            <li className="mb-2">Documenting the Minutes</li>
            <li>Filing of relevant forms with ROC</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              20% Discount on:{' '}
            </li>
            <li className="mb-2">Accounting & MIS</li>
            <li className="mb-2">Annual Compliance Package</li>
            <li>Business Plan & DPIIT Registration</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Minutes of the Board Meeting</li>
            <li className="mb-2">Minutes of the General Meeting</li>
            <li>Special Resolution passing ESOP</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Explanatory Statement on ESOP</li>
            <li className="mb-2">ESOP Structure Document</li>
            <li>Board&apos;s Report</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Register of ESOP</li>
            <li className="mb-2">PAS - 3</li>
            <li>MGT-14</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
