import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MobileHeaderAccordion } from '../utility/HeaderNavigationUtility';

/* eslint-disable @next/next/no-img-element */
function Header() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center bg-white z-50 text-temp-violet justify-between h-[60px] px-5 sticky top-0 whitespace-nowrap">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl xl:text-[32px] font-extrabold">
            <span>Realverse</span>&nbsp;
            <span className="text-amber-500">Associate</span>
          </h1>
        </Link>
        <ul className="justify-between gap-x-4 text-sm  items-center font-bold hidden lg:flex">
          <li className="flex items-center relative group cursor-pointer h-[60px]">
            <span
              className={`group-hover:text-amber-500 ${
                [
                  '/private-limited-company',
                  '/one-person-company',
                  '/limited-liability-partnership',
                  '/partnership-firm',
                  '/proprietorship-concern',
                ].indexOf(router.pathname) !== -1 && 'text-amber-500'
              }`}
            >
              Start your business
            </span>
            &nbsp;
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px] group-hover:rotate-180 duration-300 transition-all ease-in-out"
              alt="down arrow"
            />
            <ul className="absolute hidden group-hover:block custom-animation bg-white top-[60px] text-temp-violet-dark text-xs  shadow-2xl font-bold  px-4 py-3 -translate-x-1/2">
              <Link href="/private-limited-company">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Private Limited Company
                </li>
              </Link>
              <Link href="/one-person-company">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  One Person Company
                </li>
              </Link>
              <Link href="/limited-liability-partnership">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Limited Liability Partnership
                </li>
              </Link>
              <Link href="/partnership-firm">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Partnership Firm
                </li>
              </Link>
              <Link href="/proprietorship-concern">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Proprietorship Concern
                </li>
              </Link>
            </ul>
          </li>
          <li className="flex items-center relative group cursor-pointer h-[60px]">
            <span className="group-hover:text-black">Loans & Insurance</span>
            &nbsp;
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px] group-hover:rotate-180 duration-300 transition-all ease-in-out"
              alt="down arrow"
            />
            <div className="absolute hidden group-hover:flex px-4 py-3 -translate-x-1/2 custom-animation bg-white top-[60px] text-temp-violet-dark text-xs  shadow-2xl font-bold">
              <ul className=" border-r">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Personal Loan
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Business Loan
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Housing Loan
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Loan Against Property
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">MSME Loan</li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Micro Finance
                </li>
              </ul>
              <ul className="">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Health Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Vehicle Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Travel Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Corporate Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Personal Accident
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Group Term Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Life Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Keyman Insurance
                </li>
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Commercial Vehicle Insurance
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-center relative group cursor-pointer h-[60px]">
            <span
              className={`group-hover:text-amber-500 ${
                ['/accounting-mis', '/company-annual-filings'].indexOf(
                  router.pathname
                ) !== -1 && 'text-amber-500'
              }`}
            >
              Compliance
            </span>
            &nbsp;
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px] group-hover:rotate-180 duration-300 transition-all ease-in-out"
              alt="down arrow"
            />
            <ul className="absolute hidden group-hover:block custom-animation bg-white top-[60px] text-temp-violet-dark text-xs  shadow-2xl font-bold  px-4 py-3 -translate-x-1/2">
              <Link href="/accounting-mis">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Accounting & MIS
                </li>
              </Link>
              <Link href="/company-annual-filings">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Company Annual Filings
                </li>
              </Link>
            </ul>
          </li>
          <li className="flex items-center relative group cursor-pointer h-[60px]">
            <span
              className={`group-hover:text-amber-500 ${
                ['/gst-registration', '/gst-filing', '/income-tax'].indexOf(
                  router.pathname
                ) !== -1 && 'text-amber-500'
              }`}
            >
              Tax & GST
            </span>
            &nbsp;
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px] group-hover:rotate-180 duration-300 transition-all ease-in-out"
              alt="down arrow"
            />
            <ul className="absolute hidden group-hover:block custom-animation bg-white top-[60px] text-temp-violet-dark text-xs  shadow-2xl font-bold  px-4 py-3 -translate-x-1/2">
              <Link href="/gst-registration">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  GST Registration
                </li>
              </Link>
              <Link href="/gst-filing">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  GST Filing
                </li>
              </Link>
              <Link href="/income-tax">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Income Tax
                </li>
              </Link>
            </ul>
          </li>
          <Link href="/trademark">
            <li className="flex items-center cursor-pointer">
              <span
                className={`hover:text-amber-500 ${
                  ['/trademark'].indexOf(router.pathname) !== -1 &&
                  'text-amber-500'
                }`}
              >
                Trademark
              </span>
            </li>
          </Link>
          <li className="flex items-center relative group cursor-pointer h-[60px]">
            <span
              className={`hover:text-amber-500 ${
                [
                  '/start-up-india-registration',
                  '/esop-planning',
                  '/cfo-services',
                ].indexOf(router.pathname) !== -1 && 'text-amber-500'
              }`}
            >
              Advisory
            </span>
            &nbsp;
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px] group-hover:rotate-180 duration-300 transition-all ease-in-out"
              alt="down arrow"
            />
            <ul className="absolute hidden group-hover:block custom-animation bg-white top-[60px] text-temp-violet-dark text-xs  shadow-2xl font-bold  px-4 py-3 -translate-x-1/2">
              <Link href="/start-up-india-registration">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  Start-up India Registration
                </li>
              </Link>
              <Link href="/esop-planning">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  ESOP Planning
                </li>
              </Link>
              <Link href="/cfo-services">
                <li className="py-3 px-4 hover:bg-temp-violet/20">
                  CFO Services
                </li>
              </Link>
            </ul>
          </li>
        </ul>
        <div
          id="nav-icon1"
          onClick={() => setNavOpen((prev) => !prev)}
          className={`inline lg:hidden ${navOpen && 'open'}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="text-sm btn-bg relative px-4 py-2 font-bold hidden lg:inline-flex gap-x-2 rounded-lg bg-amber-500 hover:bg-amber-600 ">
          <img
            src="/icons/contact-icon.png"
            alt="contact icon"
            className="w-[20px]"
          />
          <span className="hidden lg-xl:inline">080-69428002</span>
          <div className="absolute h-3 w-3 animate-ping bg-white right-1 top-1 rounded-full opacity-70"></div>
        </h3>
      </nav>
      <MobileHeader navOpen={navOpen} />
    </>
  );
}

function MobileHeader({ navOpen }) {
  return (
    <>
      <div
        className={`h-full ${
          !navOpen && 'hidden'
        } fixed z-[100] w-full bg-temp-violet overflow-y-auto scroll-hidden overflow-x-hidden`}
        id="sidebar"
      >
        <ul className="ul-outside-mobile-navigation">
          <MobileHeaderAccordion title="Start your business">
            <Link href="/private-limited-company">
              <li>Private Limited Company</li>
            </Link>
            <Link href="/one-person-company">
              <li>One Person Company</li>
            </Link>
            <Link href="/limited-liability-partnership">
              <li>Limited Liability Partnership</li>
            </Link>
            <Link href="/partnership-firm">
              <li>Partnership Firm</li>
            </Link>
            <Link href="/proprietorship-concern">
              <li>Proprietorship Concern</li>
            </Link>
          </MobileHeaderAccordion>
          <MobileHeaderAccordion title="Loans">
            <li>Personal Loan</li>
            <li>Business Loan</li>
            <li>Housing Loan</li>
            <li>Loan Against Property</li>
            <li>MSME Loan</li>
            <li>Micro Finance</li>
          </MobileHeaderAccordion>
          <MobileHeaderAccordion title="Insurance">
            <li>Health Insurance</li>
            <li>Vehicle Insurance</li>
            <li>Travel Insurance</li>
            <li>Corporate Insurance</li>
            <li>Personal Accident</li>
            <li>Group Term Insurance</li>
            <li>Life Insurance</li>
            <li>Keyman Insurance</li>
            <li>Commercial Vehicle Insurance</li>
          </MobileHeaderAccordion>
          <MobileHeaderAccordion title="Compliance">
            <Link href="/accounting-mis">
              <li>Accounting & MIS</li>
            </Link>
            <Link href="/company-annual-filings">
              <li>Company Annual Filings</li>
            </Link>
          </MobileHeaderAccordion>
          <MobileHeaderAccordion title="Tax & GST">
            <Link href="/gst-registration">
              <li>GST Registration</li>
            </Link>
            <Link href="/gst-filing">
              <li>GST Filing</li>
            </Link>
            <Link href="/income-tax">
              <li>Income Tax</li>
            </Link>
          </MobileHeaderAccordion>
          <li className="navAccordion"></li>
          <MobileHeaderAccordion
            title="Trademark"
            single="true"
            href="/trademark"
          ></MobileHeaderAccordion>
          <MobileHeaderAccordion title="Advisory">
            <Link href="/start-up-india-registration">
              <li>Start-up India Registration</li>
            </Link>
            <Link href="/esop-planning">
              <li>ESOP Planning</li>
            </Link>
            <Link href="/cfo-services">
              <li>CFO Services</li>
            </Link>
          </MobileHeaderAccordion>
        </ul>
      </div>
    </>
  );
}

export default Header;
