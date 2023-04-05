import Link from 'next/link';

function FooterNavigationUtility() {
  return <div>FooterNavigationUtility</div>;
}

export function CustomLink({ children, href = '' }) {
  return (
    <>
      <Link
        href={href}
        className="hover:text-amber-400 hover:underline underline-offset-2"
      >
        {children}
      </Link>
    </>
  );
}

export default FooterNavigationUtility;
