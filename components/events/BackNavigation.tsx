import Link from "next/link";

type BackNavigationProps = {
  href: string;
  label: string;
};

export default function BackNavigation({ href, label }: BackNavigationProps) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
    >
      ← {label}
    </Link>
  );
}
