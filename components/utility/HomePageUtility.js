import { ALL_SERVICE_DATA } from '@/lib/data';
import Link from 'next/link';
import { useState } from 'react';

function HomePageUtility() {
  return <div>HomePageUtility</div>;
}

export function AllServiceUtilityNew() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <ul className="flex justify-start service-category-lg:justify-center overflow-x-auto whitespace-nowrap items-center">
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 0 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(0)}
        >
          Start your business
        </li>
        {/* <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 1 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(1)}
        >
          Loans & Insurance
        </li> */}
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 2 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(2)}
        >
          Compliance
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 3 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(3)}
        >
          Tax & GST
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 4 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(4)}
        >
          Trademark
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 5 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(5)}
        >
          Advisory
        </li>
      </ul>
      {/* service box */}
      <div className="bg-temp-violet-light">
        <div className="px-[10px] service-box-sm:px-[15px] service-box-lg:px-[20px] mx-auto max-w-[1198px] w-full">
          <div className="py-[20px] grid grid-cols-allServices gap-x-4 gap-y-4 mx-auto">
            {ALL_SERVICE_DATA[currentTab][0].map((item) => (
              <div className="service-detail-container" key={item.id}>
                <div>
                  <div className="service-detail-header-container">
                    <p className="service-detail-header">{item.title}</p>
                  </div>
                  <p className="service-detail-description text-sm line-clamp-5">
                    {item.desc}
                  </p>
                </div>
                <div className="service-detail-bottom-part">
                  <div>
                    <h2 className="text-[17px] font-semibold">
                      <span className="text-sm">₹</span>
                      {item.price}
                    </h2>
                    <p className="text-xs mt-1">Professional Fees</p>
                  </div>
                  <Link
                    target="_blank"
                    className="service-detail-bottom-button"
                    href={item.href}
                  >
                    GET&nbsp;STARTED
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of service box */}
    </>
  );
}

export function AllServiceUtility() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <ul className="flex justify-start service-category-lg:justify-center overflow-x-auto whitespace-nowrap items-center">
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 0 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(0)}
        >
          Start your business
        </li>
        {/* <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 1 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(1)}
        >
          Loans & Insurance
        </li> */}
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 2 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(2)}
        >
          Compliance
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 3 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(3)}
        >
          Tax & GST
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 4 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(4)}
        >
          Trademark
        </li>
        <li
          className={`flex items-center py-3 px-6  cursor-pointer hover:text-temp-violet ${
            currentTab === 5 && 'all-service-active-link'
          }`}
          onClick={() => setCurrentTab(5)}
        >
          Advisory
        </li>
      </ul>
      {/* service box */}
      <div className="bg-temp-violet-light">
        <div className="px-[10px] service-box-sm:px-[15px] service-box-lg:px-[20px] mx-auto max-w-[1198px] w-full">
          <div className="py-[20px] smol-scroll-snap mx-auto justify-start service-box-lg:justify-start">
            {ALL_SERVICE_DATA[currentTab][0].map((item) => (
              <div className="service-detail-container" key={item.id}>
                <div>
                  <div className="service-detail-header-container">
                    <p className="service-detail-header">{item.title}</p>
                  </div>
                  <p className="service-detail-description text-sm line-clamp-5">
                    {item.desc}
                  </p>
                </div>
                <div className="service-detail-bottom-part">
                  <div>
                    <h2 className="text-[17px] font-semibold">
                      <span className="text-sm">₹</span>
                      {item.price}
                    </h2>
                    <p className="text-xs mt-1">Professional Fees</p>
                  </div>
                  <Link
                    target="_blank"
                    className="service-detail-bottom-button"
                    href={item.href}
                  >
                    GET&nbsp;STARTED
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of service box */}
    </>
  );
}

export default HomePageUtility;
