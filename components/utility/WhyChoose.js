/* eslint-disable @next/next/no-img-element */

function WhyChoose({ className = '' }) {
  return (
    <section
      className={`py-20 text-center ${
        className === '' ? 'bg-white' : className
      } `}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <div className="text-2xl flex justify-center items-center font-bold gap-x-5 md:text-3xl">
          <hr className="custom-hr" />
          WHY CHOOSE REALVERSE ASSOCIATES?
          <hr className="custom-hr" />
        </div>

        {/* <!-- Grid 2 begins --> */}
        <div className="mt-12 grid grid-auto-fit-sm gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/images/image 17.png"
              className="w-16"
              alt="professional team"
            />
            <h3 className="text-xl mt-2 font-bold">Professional Team</h3>
            <p className="text-sm mt-2.5 leading-[27px]">
              Chartered Accountants, Company Secretaries & MBAs under one roof!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/image 18.png"
              className="w-16"
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
              className="w-16"
              alt="Honest Advice"
            />
            <h3 className="text-xl mt-2 font-bold">Honest Advice</h3>
            <p className="text-sm mt-2.5 leading-[27px]">
              Our team will give you honest advice keeping your goals in mind!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/image 20.png"
              className="w-16"
              alt="Transparent Pricing"
            />
            <h3 className="text-xl mt-2 font-bold">Transparent Pricing</h3>
            <p className="text-sm mt-2.5 leading-[27px]">
              No hidden charges. Period.
            </p>
          </div>
        </div>
        {/* <!-- Grid 2 ends --> */}
      </div>
    </section>
  );
}

export default WhyChoose;
