/* eslint-disable @next/next/no-img-element */
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
            Start-up India Registration Process FEE - Realverse Associate
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
            href="https://www.realverseassociates.in/start-up-india-registration"
          />
        </Head>
        <CategoryPageCTA
          title="Start-up India Registration"
          subtitle="DPIIT Registration is Best Suited for:"
          price="199"
          caption="In 7 days . From Any where . At a Single Click"
        >
          <li>Start-ups & Businesses looking for investors</li>
          <li>Businesses going for Government tenders</li>
          <li>Start-ups, yes every start-up!</li>
        </CategoryPageCTA>
        <CategoryPageWhatsIncluded title="What's Included?">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Registration on Start-up India Portal</li>
            <li className="mb-2">Preparation & Filing of Application</li>
            <li className="mb-2">DPIIT Registration / Recognition</li>
            <li>Application for Angel Tax Exemption*</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">20% off on:</li>
            <li className="mb-2">IEC Registration</li>
            <li className="mb-2">GST Registration</li>
            <li>MSME Registration</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2 list-image-none font-bold">10% off on:</li>
            <li className="mb-2">Annual Compliances</li>
            <li className="mb-2">Private Limited Incorporation</li>
            <li>Business Plans / Investor Decks</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <WhyChoose className="bg-temp-violet-light" />
        <CategoryPageWhatsIncluded title="Documents Required">
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Company Logo</li>
            <li className="mb-2">Company Profile</li>
            <li>Contact Details (Email, Address, No)</li>
          </ul>

          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Number of Employees</li>
            <li className="mb-2">Director / Partners Details & Contact</li>
            <li>Business PAN Card</li>
          </ul>
          <ul className="list-image-[url(/icons/caret.png)]">
            <li className="mb-2">Incorporation / Partnership Deed</li>
            <li className="mb-2">Certificate of Awards / Recognition</li>
            <li>Pitch Deck of the Company</li>
          </ul>
        </CategoryPageWhatsIncluded>
        <section className="py-16 text-center leading-[22px] bg-primary-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
            {/* <!-- Grid 2 begins --> */}
            <div className="mt-12 grid grid-auto-fit-sm gap-x-8 gap-y-4 text-center px-5 text-sm">
              <div className="">
                <img
                  src="/images/Start-up-India-250.png.webp"
                  alt="startup india"
                  className=" mx-auto mb-3 leading-[21px]"
                />
                <p>
                  Your private limited company will be eligible to be registered
                  under the Startup India initiative. Start your business and
                  register it today to avail various startup benefits!
                </p>
              </div>

              <div className="">
                <img
                  src="/images/Digital-India-Logo-250.png.webp"
                  alt="startup india"
                  className=" mx-auto mb-3 leading-[21px]"
                />
                <p>
                  Though we have an office in Mumbai, we encourage you to use
                  digital means for your incorporation documents submission. We
                  can get your company registered without you leaving the
                  comforts of your home! 🙂
                </p>
              </div>

              <div className="">
                <img
                  src="/images/Make-in-india-250.png.webp"
                  alt="startup india"
                  className="mx-auto mb-3 leading-[21px]"
                />
                <p>
                  If you plan to start or set up a manufacturing unit – contact
                  us right away! We will be happy to support you by giving you a
                  special package on your company incorporation!
                </p>
              </div>
            </div>
            {/* <!-- Grid 2 ends --> */}
          </div>
        </section>
      </CategoryLayout>
    </>
  );
}
