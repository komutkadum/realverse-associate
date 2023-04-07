/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import CTAForm from '@/components/utility/CTAForm';
import { AllServiceUtilityNew } from '@/components/utility/HomePageUtility';
import WhyChoose from '@/components/utility/WhyChoose';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Realverse Associates</title>
        <meta
          name="description"
          content="Realverse Associates is the leading Online Company Registration Consultants services in Bangalore with trusted advisors for Taxation, Fund Raise Compliance &amp; Company Set-up Services all over India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {/* <!-- cta --> */}
      <section className="custom-gradient">
        <div className="mx-auto max-w-7xl px-4 gap-x-10 flex flex-col gap-y-6 py-10 md-lg:grid md-lg:items-center md-lg:grid-cols-cta md-lg:py-20">
          {/* <!-- left side --> */}
          <div className="grid justify-center items-center gap-y-3">
            <h1 className="text-center ">
              <span className="text-xl sm:text-2xl font-bold text-violet-200">
                We are your trusted
              </span>
              <br />
              <span className="text-xl leading-[30px] sm:text-3xl sm:leading-[45px] lg-xl:text-4xl lg-xl:leading-[55px] font-black text-amber-400">
                Chartered Accountant, Tax Consultants, Lawyers, Financial
                Advisors.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-violet-300 mobile-responsive-padding lg-md:px-32 text-center leading-[30px]">
              We handle your messy{' '}
              <span className="text-violet-200 font-medium">legalities</span>{' '}
              and{' '}
              <span className="text-violet-200 font-medium">documentation</span>
              , so that you worry less and focus more on your{' '}
              <span className="text-violet-200 font-medium">
                dream business.
              </span>
            </p>
            <div className="text-xs xl:text-sm sm:text-base text-center font-bold lg-md:px-24 lg-lg:px-32">
              <ul className="grid grid-cols-2 gap-y-4 py-6 bg-white text-temp-violet-dark shadow-2xl rounded-lg">
                <li className="border-r-2">Company Registration</li>
                <li>Trademark Registration</li>
                <li className="border-r-2">ROC Filing</li>
                <li>Startup India Registration</li>
                <li className="border-r-2">GST Registration</li>
                <li>ISO Certification</li>
                <li className="border-r-2">MSME Registration</li>
                <li>Free Legal Agreements</li>
                <li className="border-r-2">Insurance</li>
                <li>Loans</li>
              </ul>
            </div>
          </div>
          {/* <!-- end of left side --> */}
          {/* <!-- right side --> */}
          <div className="">
            <CTAForm />
          </div>
          {/* <!-- end of right side --> */}
        </div>
      </section>

      {/* <!-- All services --> */}
      <section>
        <div className="flex justify-center items-center gap-x-5 pt-12 pb-10 text-2xl service-box-sm:text-3xl font-semibold text-center">
          <hr className="custom-hr" />
          All Services
          <hr className="custom-hr" />
        </div>
        <AllServiceUtilityNew />
      </section>

      {/* <!-- india scheme --> */}
      <section className="flex justify-center items-center py-10 gap-x-6">
        <img src="/images/india-scheme.png" className="" alt="india scheme" />
      </section>

      {/* <!-- our services --> */}
      <section className="py-20 text-center hidden bg-temp-violet-light leading-[22px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
          <div className="text-2xl flex justify-center items-center font-bold gap-x-5 md:text-3xl">
            <hr className="custom-hr" />
            Our Services
            <hr className="custom-hr" />
          </div>
          {/* <!-- Grid 2 begins --> */}
          <div className="mt-12 grid grid-auto-fit-sm gap-8 text-left">
            <div className=" cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/Rectangle 29.png"
                className="object-cover object-center w-full max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">ITR Filing Online</h3>
              <p className="text-sm my-[10px] ">
                An Income tax return (ITR) is a form used to file information
                about your income and tax to the Income Tax Department.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/Rectangle 28.png"
                className="object-cover object-center w-full max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">
                Company Registration
              </h3>
              <p className="text-sm my-[10px] ">
                It includes all the forms of company registration, compliances,
                PAN and TAN, GST, change of Registered Address
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/Rectangle 27.png"
                className="object-cover w-full object-center max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">
                Online Accounting Services
              </h3>
              <p className="text-sm my-[10px] ">
                OLI Accountant will help you to register & filing PF, ESIC,
                Ptax, TDS & Online HR service.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/Rectangle 26.png"
                className="object-cover w-full object-center max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">Legal Services</h3>
              <p className="text-sm my-[10px] ">
                We provide the legal services to the weaker section of the
                society so that they get the opportunity
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/image 42.png"
                className="object-cover w-full object-center max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">
                Import Export Code Registration
              </h3>
              <p className="text-sm my-[10px] line-clamp-3 ">
                Register your import export business under Directorate General
                of Foreign Trade, Ministry of Commerce and Industry, Govt. of
                India.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/image 43.png"
                className="object-cover object-center w-full max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">
                Trademark Registration Online
              </h3>
              <p className="text-sm my-[10px]">
                Get your Trademark registration from anywhere in India and
                protect your Brand Name/Logo/Slogan.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/image 44.png"
                className="object-cover w-full object-center max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">GST Services</h3>
              <p className="text-sm my-[10px]">
                Outsource your GST compliance to Online Legal India. India’s
                fastest growing online corporate services.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
            <div className="cursor-pointer group">
              <img
                alt="blog photo"
                src="/images/image 45.png"
                className="object-cover w-full object-center max-h-40 hover:opacity-60 transition-all"
              />
              <h3 className="text-lg font-bold mt-[10px]">
                Digital Signature Certificate
              </h3>
              <p className="text-sm my-[10px]">
                We provide the legal services to the weaker section of the
                society so that they get the opportunity
              </p>
              <a
                href="#"
                className="text-red-500 font-bold flex items-center gap-x-2 "
              >
                Click Here{' '}
                <img
                  src="/icons/right-arrow.png"
                  className="w-6 group-hover:translate-x-2 duration-300 ease-in-out"
                  alt="right-arrow"
                />
              </a>
            </div>
          </div>
          {/* <!-- Grid 2 ends --> */}
        </div>
      </section>

      {/* why choose realverse associates */}
      <WhyChoose className="bg-temp-violet-light" />

      {/* footer */}
      <Footer />
    </>
  );
}
