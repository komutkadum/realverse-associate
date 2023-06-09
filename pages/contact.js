/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { sendEmail } from '@/lib/sendEmail';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

function Home() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact - Realverse Associate</title>
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
          href="https://www.realverseassociates.in/contact"
        />
      </Head>
      <Header />
      <section className="bg-temp-violet-light pt-6 pb-10 px-2">
        <div className="max-w-6xl px-5  md:px-10 mx-auto pt-6 md:pt-10 pb-10 shadow-sm border bg-white">
          <h1 className="text-2xl md:text-4xl text-center font-extrabold text-amber-500">
            Contact Us
          </h1>
          <div className="grid md:flex md:justify-between mt-6 gap-x-4 gap-y-6 ">
            <form
              ref={form}
              onSubmit={(e) => sendEmail(e, setLoading, form, router)}
              className="text-sm grid gap-y-4 flex-1"
            >
              <div className="grid gap-y-2">
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  className="rounded-md border-gray-300"
                  required
                />
              </div>
              <div className="grid gap-y-2">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  className="rounded-md border-gray-300"
                  required
                />
              </div>
              <div className="grid gap-y-2">
                <label className="font-medium">Phone</label>
                <input
                  type="number"
                  name="user_phone"
                  min={10}
                  max={10}
                  placeholder="Enter your phone number"
                  className="rounded-md border-gray-300"
                  required
                />
              </div>
              <div className="grid gap-y-2">
                <label className="font-medium">Message</label>
                <textarea
                  type="number"
                  name="message"
                  placeholder="Enter your message"
                  className="rounded-md border-gray-300"
                  rows={3}
                  required
                />
              </div>
              <div>
                <button
                  className="bg-amber-500 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-amber-600 py-2 px-14 text-lg text-white"
                  disabled={loading}
                >
                  {loading ? 'submitting...' : 'Submit'}
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <img
                src="/images/Getintouch.gif"
                alt="contact us"
                className="w-10/12"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl px-2 service-category-lg:px-4 mx-auto pt-28 pb-28">
          <h1 className="text-2xl md:text-4xl text-center font-extrabold text-amber-500 pb-6">
            Our Office
          </h1>
          <div className="grid service-category-lg:grid-cols-contactTemplate mt-6  gap-x-3">
            <div className="border px-4 py-5 flex flex-col gap-y-2 bg-white text-temp-violet-dark">
              <h1 className="text-2xl text-center font-medium">Address</h1>
              <p className="text-sm">
                World Trade Centre, 22nd Floor, 26/1, BRIGADE GATEWAY, Dr
                Rajkumar Rd, Malleshwaram, Bengaluru, Karnataka - 560055
              </p>
              <p>080-69428002</p>
              <p>enquiry@realverseassociate.com</p>
            </div>
            <div className="border bg-white h-60">
              <img
                src="/images/fake-google-map.png"
                alt="fake google map"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
