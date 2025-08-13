'use client';

import Link from 'next/link';

export default function ClientLink({ href, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
