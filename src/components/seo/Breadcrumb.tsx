import Link from "next/link";
import { JsonLd } from "./JsonLd";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

const BASE_URL = "https://ph-document.com";

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const all: BreadcrumbItem[] = [{ label: "TOP", href: "/ja" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="パンくずリスト" className="border-b border-gray-200 bg-white">
        <div className="container-site py-2.5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            {all.map((item, i) => {
              const isLast = i === all.length - 1;
              return (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-gray-300">
                      /
                    </span>
                  )}
                  {isLast ? (
                    <span className="text-gray-700" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#1a2846] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
