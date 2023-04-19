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
            Accounting and Book Keeping Services - Realverse Associate
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
            href="https://www.realverseassociates.in/accounting-mis"
          />
        </Head>
        <CategoryPageCTA title="Accounting & MIS" price="4,999">
          <li>Mandatory for Specified Businesses and Services</li>
          <li>Ensures timely and accurate compliance</li>
          <li>Get real-time financial health</li>
          <li>Helps track business performance</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Accounting in Tally / Quick Books</li>
            <li className="mb-2">Customised MIS on Monthly basis</li>
            <li className="mb-2">Monthly Cash Flows</li>
            <li>Flagging of Debtor and Creditor Issues</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free GST Registration</li>
            <li className="mb-2">Free Import Export Code (IEC)</li>
            <li className="mb-2">Free Udyog Aadhar Certificate</li>
            <li>Free PT Registration</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              20% Discount on:{' '}
            </li>
            <li className="mb-2">Private Limited Incorporation</li>
            <li className="mb-2">Annual Compliances</li>
            <li>Business Plan & DPIIT Registration</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Cash Books</li>
            <li className="mb-2">Bank Statements</li>
            <li className="mb-2">All Invoice Copies</li>
            <li>Loan Statements</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Deposit Slips</li>
            <li className="mb-2">Purchase Orders</li>
            <li>Credit Memos</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Receipts Details</li>
            <li className="mb-2">Investment Details</li>
            <li>Fixed Asset Register</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
