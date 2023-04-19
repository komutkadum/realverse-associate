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
            CFO &amp; Management Consulting Services| Startup Pitch Deck
            Presentation - Realverse Associate
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
            href="https://www.realverseassociates.in/cfo-services"
          />
        </Head>
        <CategoryPageCTA
          title="CFO & Management Consulting"
          price="4,999"
          caption=""
        >
          <li>Start-ups & Businesses looking for investors</li>
          <li>Financial Planning and Forecasting</li>
          <li>Budgeting and Cost Reduction</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Financial Analysis</li>
            <li className="mb-2">Budgeting and Forecasting</li>
            <li className="mb-2">Invoicing and System Integration</li>
            <li>Cashflow Management</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Revenue Recognition</li>
            <li className="mb-2">Tax Planning</li>
            <li className="mb-2">Fund Raise Assessment</li>
            <li>Application of Loans</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Vetting of Contracts</li>
            <li className="mb-2">Consulting on Strategic Decisions</li>
            <li className="mb-2">Assessment of Profitabilities</li>
            <li>Accounting & Compliance Overview</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
      </CategoryLayout>
    </>
  );
}
