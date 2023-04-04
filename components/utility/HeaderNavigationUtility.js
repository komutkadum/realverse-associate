/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

function HeaderNavigationUtility() {
  return <div>HeaderNavigationUtility</div>;
}

export function MobileHeaderAccordion({
  title,
  children,
  single = '',
  href = '',
}) {
  return (
    <>
      <details>
        <summary>
          {single === '' ? title : <Link href={href}>{title}</Link>}
          {single === '' && (
            <img
              src="/icons/arrow-down.png"
              className="w-[15px] h-[15px]"
              alt="down arrow"
            />
          )}
        </summary>
        <div className="ul-inside-mobile-navigation open:bg-white">
          {children}
        </div>
      </details>
    </>
  );
}

export default HeaderNavigationUtility;
