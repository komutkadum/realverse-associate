function Footer() {
  return (
    <>
      <footer className="custom-gradient h-screen"></footer>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 grid w-full  text-center gap-y-4 md:text-left md:flex md:items-center md:justify-between">
          <div className="text-temp-violet">
            <h2 className="text-2xl font-bold md:text-3xl">
              Get Started with Realverse Associates
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base">
              Start, Grow, and manage your business. We are with you in every
              step
            </p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 ease-in-out delay-100 transition-colors font-semibold tracking-wide text-lg text-white px-12 py-4 whitespace-nowrap">
            Consult Now
          </button>
        </div>
      </section>
      <section className="py-12 bg-temp-violet text-center text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
          <h2 className="text-xl font-bold md:text-2xl">Follow us</h2>
          <div className="font-bold text-xl mt-4 flex items-center justify-center gap-x-4">
            <a className="p-2.5 rounded-full bg-white hover:bg-violet-500 cursor-pointer grid place-items-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="32"
                height="32"
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
            <a className="p-2.5 rounded-full bg-white hover:bg-violet-500 cursor-pointer grid place-items-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter"
                width="32"
                height="32"
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
            <a className="p-2.5 rounded-full bg-white hover:bg-violet-500 cursor-pointer grid place-items-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="32"
                height="32"
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

            <a className="p-2.5 rounded-full bg-white hover:bg-violet-500 cursor-pointer grid place-items-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-youtube"
                width="32"
                height="32"
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
      </section>
    </>
  );
}

export default Footer;
