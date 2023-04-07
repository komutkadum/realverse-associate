/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function CallButton() {
  return (
    <>
      <div className="fixed bottom-8 z-[1000] right-8">
        <div className="flex items-center flex-col gap-y-4 ">
          <Link
            href="https://wa.me/+919164484777"
            className="hover:-translate-y-3 transition-transform duration-500 ease-in-out"
          >
            <img
              src="/images/whatsapp.png"
              alt="whatsapp icon"
              className="w-[58px]"
            />
          </Link>
          <Link
            href="tel:080-69428002"
            className="bg-red-500 flex lg:hidden justify-center items-center w-[58px] h-[58px] p-3 rounded-full z-[1000] shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone shadow-2xl"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CallButton;
