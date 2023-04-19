/* eslint-disable @next/next/no-img-element */
import { CustomLink } from '../utility/FooterNavigationUtility';

function Footer() {
  return (
    <>
      <section className="custom-gradient pt-16">
        <div className="max-w-[90rem] mx-auto px-10 flex flex-col items-start gap-y-10 lg-xl:flex-row lg-xl:justify-between">
          <div>
            <div className="flex justify-center">
              <img
                src="/images/image 37.png"
                alt="realverse associate"
                className="w-56 mb-5"
              />
            </div>
            <h1 className="text-xl xs-lg:text-2xl lg-xl:text-[28px] font-extrabold text-white">
              Realverse <span className="text-amber-400">Associates</span>
            </h1>
            <div className="flex justify-around gap-x-4 mt-4">
              <a className="p-2 flex rounded-full bg-white hover:bg-violet-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#1877f2"
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              <a className="p-2 flex rounded-full bg-white hover:bg-violet-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#1da1f2"
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
              <a className="p-2 flex rounded-full bg-white hover:bg-violet-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f77737"
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
              <a className="p-2 flex rounded-full bg-white hover:bg-violet-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff0000"
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid xs-lg:grid-cols-2 justify-between service-category-lg:flex service-category-lg:justify-end text-sm gap-x-16 text-temp-white gap-y-4">
            <ul className="flex flex-col gap-y-2.5 ">
              <li className="text-lg font-bold text-gray-300 mb-4">
                Start Your Business
              </li>
              <li>
                <CustomLink href="/private-limited-company">
                  Private Limited Company
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/one-person-company">
                  One Person Company
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/limited-liability-partnership">
                  Limited Liability Partnership
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/partnership-firm">
                  Partnership Firm
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/proprietorship-concern">
                  Proprietorship Concern
                </CustomLink>
              </li>
            </ul>

            <ul className="flex flex-col gap-y-2.5 ">
              <li className="text-lg font-bold text-gray-300 mb-4">
                Compliance
              </li>

              <li>
                <CustomLink href="/accounting-mis">Accounting & MIS</CustomLink>
              </li>
              <li>
                <CustomLink href="/company-annual-filings">
                  Company Annual Filings
                </CustomLink>
              </li>

              <li>
                <CustomLink href="/trademark">Trademark</CustomLink>
              </li>
            </ul>

            <ul className="flex flex-col gap-y-2.5 ">
              <li className="text-lg font-bold text-gray-300 mb-4">
                Tax & GST
              </li>

              <li>
                <CustomLink href="/gst-registration">
                  GST Registration
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/gst-filing">GST Filing</CustomLink>
              </li>
              <li>
                <CustomLink href="/income-tax">Income Tax</CustomLink>
              </li>
            </ul>

            <ul className="flex flex-col gap-y-2.5 ">
              <li className="text-lg font-bold text-gray-300 mb-4">Advisory</li>

              <li>
                <CustomLink href="/start-up-india-registration">
                  Start-up India Registration
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/esop-planning">ESOP Planning</CustomLink>
              </li>
              <li>
                <CustomLink href="/cfo-services">CFO Services</CustomLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-temp-violet-dark px-4 xs-lg:px-10">
          <div className=" py-6 mt-12 text-white max-w-[90rem] mx-auto">
            <div className="text-sm text-center sm:flex sm:text-base justify-between">
              <ul className="flex justify-center flex-wrap gap-x-4 items-center mb-6 font-medium sm:mb-0 ">
                <li>
                  <CustomLink href="/about">About</CustomLink>
                </li>
                <li>
                  <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
                </li>
                <li>
                  <CustomLink href="/terms-and-conditions">T&C</CustomLink>
                </li>
                <li>
                  <CustomLink href="/contact">Contact</CustomLink>
                </li>
                <li>
                  <a
                    href="https://prestigelavender-fields.in/"
                    className="hover:text-amber-400 hover:underline underline-offset-2"
                  >
                    Other Business
                  </a>
                </li>
              </ul>
              <p>Disclaimer</p>
            </div>
            <hr className=" my-4" />
            <div className="text-sm text-center">
              Copyright©2023 Realverse Associates Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
