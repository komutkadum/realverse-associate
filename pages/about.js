/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>About Us - Realverse Associate</title>
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
        <link rel="canonical" href="https://www.realverseassociates.in/about" />
      </Head>
      <Header />
      <section className="bg-temp-violet-light pt-6 pb-12">
        <div className="max-w-4xl px-5  md:px-10 mx-auto pt-6 md:pt-10  bg-white shadow-lg">
          <h1 className="text-2xl md:text-4xl text-center font-extrabold text-amber-500">
            About Us
          </h1>
          <div className="block my-4 ">
            <hr className=" border-amber-500 border-2 sm:mx-auto" />
            <div className="triangle-arrow-down mx-auto"></div>
          </div>
          <div className="mt-6 grid gap-y-4 leading-7 text-justify">
            <p>
              Welcome to Realverse Associate, your one-stop solution for legal
              documentation and paperwork needs. We are a team of experienced
              professionals committed to providing reliable, efficient, and
              affordable services to help businesses and individuals thrive.
            </p>
            <p>
              Our company was founded in 2022 by Akshay Mishra, a seasoned
              entrepreneur with a passion for simplifying complex legal
              processes. Since then, we have helped hundreds of clients across
              various industries to streamline their paperwork and focus on what
              matters most - growing their business.
            </p>
            <p>
              At Realverse Associate, we believe that every client deserves
              personalized attention and tailored solutions. We take the time to
              understand your unique needs and goals, and we work closely with
              you to ensure that our services meet or exceed your expectations.
            </p>
            <p>
              We pride ourselves on our customer-centric approach and our
              commitment to delivering high-quality services at competitive
              prices. But don&apos;t just take our word for it - check out our
              testimonials page to see what our clients have to say about us.
            </p>
            <p>
              Whether you are a startup entrepreneur, a small business owner, or
              an individual seeking legal documentation services, we are here to
              help. Contact us today to learn more about how we can support your
              success.
            </p>
          </div>
        </div>

        <div className="max-w-4xl bg-white px-5  md:px-10 mx-auto pt-6 md:pt-12 pb-12 shadow-lg">
          <h1 className="text-2xl md:text-4xl text-center font-extrabold text-amber-500">
            Why Choose Realverse Asscoiate?
          </h1>
          <div className="block my-4 ">
            <hr className=" border-amber-500 border-2 sm:mx-auto" />
            <div className="triangle-arrow-down mx-auto"></div>
          </div>
          <div>
            <div className="mt-12 grid grid-auto-fit-lg text-center gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="/images/image 17.png"
                  className="w-16 ring-1 ring-[#5c8ce2] rounded-full"
                  alt="professional team"
                />
                <h3 className="text-xl mt-2 font-bold">Professional Team</h3>
                <p className="text-sm mt-2.5 leading-[27px]">
                  Chartered Accountants, Company Secretaries & MBAs under one
                  roof!
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/images/image 18.png"
                  className="w-16 ring-1 ring-[#5c8ce2] rounded-full"
                  alt="Timely Execution"
                />
                <h3 className="text-xl mt-2 font-bold">Timely Execution</h3>
                <p className="text-sm mt-2.5 leading-[27px]">
                  We give you a defined timeline and stick to it!
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/images/image 19.png"
                  className="w-16 ring-1 ring-[#5c8ce2] rounded-full"
                  alt="Honest Advice"
                />
                <h3 className="text-xl mt-2 font-bold">Honest Advice</h3>
                <p className="text-sm mt-2.5 leading-[27px]">
                  Our team will give you honest advice keeping your goals in
                  mind!
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/images/image 20.png"
                  className="w-16 ring-1 ring-[#5c8ce2] rounded-full"
                  alt="Transparent Pricing"
                />
                <h3 className="text-xl mt-2 font-bold">Transparent Pricing</h3>
                <p className="text-sm mt-2.5 leading-[27px]">
                  No hidden charges. Period.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl bg-white px-5  md:px-10 mx-auto pt-6 md:pt-12 pb-16 shadow-lg">
          <h1 className="text-2xl md:text-4xl text-center font-extrabold text-amber-500">
            Meet Our Team
          </h1>
          <div className="block my-4 ">
            <hr className=" border-amber-500 border-2 sm:mx-auto" />
            <div className="triangle-arrow-down mx-auto"></div>
          </div>
          <div className="mt-10 flex flex-wrap gap-y-10 gap-x-4 text-xl font-bold text-amber-500 justify-around text-center">
            <div className="grid gap-y-8">
              <img
                src="/images/akshaymishra.jpeg"
                alt="akshay mishra"
                className="w-60 rounded-full ring-2 ring-offset-8 ring-amber-500"
              />
              <h1>Akshay Mishra</h1>
            </div>
            <div className="grid gap-y-8">
              <img
                src="/images/kadumkomut.jpeg"
                alt="kadum komut"
                className="w-60 rounded-full ring-2 ring-offset-8 ring-amber-500"
              />
              <h1>Kadum Komut</h1>
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
