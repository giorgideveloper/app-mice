"use client";

import Link from "next/link";

export default function ClientLink({ href, children }) {
  return <Link href={href}>{children}</Link>;
}
