import CTAForm from './CTAForm';

function CategoryPageUtility() {
  return <div>CategoryPageUtility</div>;
}

export function CategoryPageCTA({
  title = '',
  price = '',
  subtitle = 'Best Suited For',
  children,
}) {
  return (
    <>
      <section className="custom-gradient py-5 md:py-12 px-4 md:px-10 text-white">
        <div className="max-w-6xl mx-auto grid gap-y-6 md:flex md:justify-between items-center  gap-x-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl service-category-lg:text-4xl font-extrabold leading-10 mb-2 md:mb-4">
              {title}
            </h1>
            <h1 className="text-xl text-amber-400 sm:text-2xl service-category-lg:text-4xl font-extrabold mb-2 md:mb-4">
              <span>@Rs.</span>
              <span className="ml-1">{price}*</span>
            </h1>
            <p className="font-medium mb-4 text-sm">
              In 15 days . From Any where . At a Single Click
            </p>
            <div className="border text-temp-violet px-0 md:px-2 max-w-md mx-auto md:max-w-md flex mb-1.5 bg-white rounded-lg justify-center flex-col">
              <p className="pt-3 underline underline-offset-8 font-bold">
                {subtitle}
              </p>
              <ul className="text-left grid gap-y-2 px-8 py-6 font-semibold list-image-[url(/icons/check-mark.png)]">
                {children}
              </ul>
            </div>
            <p className="italic text-xs text-temp-white">
              *Professional Fees. EMI Option Available.
            </p>
          </div>
          <CTAForm />
        </div>
      </section>
    </>
  );
}

export function CategoryPageWhatsIncluded({ children, title }) {
  return (
    <>
      <section className="py-16 text-center bg-white leading-[22px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
          <div className="text-2xl whitespace-nowrap flex justify-center items-center font-bold gap-x-5 md:text-3xl">
            <hr className="custom-hr" />
            {title}
            <hr className="custom-hr" />
          </div>
          {/* <!-- Grid 2 begins --> */}
          <div className="mt-12 grid grid-auto-fit-sm gap-x-8 gap-y-4 text-left px-5">
            {children}
          </div>
          {/* <!-- Grid 2 ends --> */}
        </div>
      </section>
    </>
  );
}

export default CategoryPageUtility;
