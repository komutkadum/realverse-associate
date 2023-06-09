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
          <title>New Gst Registration Online - Realverse Associate</title>
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
            href="https://www.realverseassociates.in/gst-registration"
          />
        </Head>
        <CategoryPageCTA
          title="GST Registration"
          price="999"
          caption="In 7 days . From Any where . At a Single Click"
        >
          <li>Service Providers with Turnover of ₹ 20 Lacs</li>
          <li>Manufacturers & Traders with Turnover of ₹ 40 Lacs</li>
          <li>E-commerce / Marketplace Registrations</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">GST Registration</li>
            <li className="mb-2">GST Certificate</li>
            <li className="mb-2">Free Personalised GST Invoice</li>
            <li>HSN Code / Rate Assistance</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">20% Discount on:</li>
            <li className="mb-2">Annual GST Filing Package</li>
            <li className="mb-2">Additional Place of Business</li>
            <li>Annual Accounting Package</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Free Udyog Aadhar Certificate</li>
            <li>Free IEC Certificate</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              Directors / Partners / Proprietor:
            </li>
            <li className="mb-2">PAN + Aadhar</li>
            <li>Passport sized Photos</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              Company / LLP / Firm / Proprietorship
            </li>
            <li className="mb-2">PAN Card</li>
            <li>MoA / AoA / COI / Partnership Deed</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              Office Address Proof:
            </li>
            <li className="mb-2">If Rented</li>
            <li className="mb-2">Electricity Bill (not over 2 months old)</li>
            <li className="mb-2">Rent Agreement</li>
            <li className="mb-2">NOC(s) from owner(s)</li>
            <li>PAN Card(s) of owner(s)</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">
              Office Address Proof:
            </li>
            <li className="mb-2">If Owned / Family Members</li>
            <li className="mb-2">Electricity Bill (not over 2 months old)</li>
            <li className="mb-2">NOC(s) from owner(s)</li>
            <li>PAN Card(s) of owner(s)</li>
          </ul>
        </CategoryPageWhatsIncluded>
      </CategoryLayout>
    </>
  );
}
