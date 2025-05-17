
import { Icon } from "../../icons/icon";
import { cn } from "../../lib/utils";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  const currentPath = items[items.length - 1]?.href;

  return (
    <nav className={cn("flex items-center py-2 ", className)}>
      <Link href={items[0].href} className="cursor-pointer flex items-center" >
        <Icon name="arrow-left" width={14} height={14} className="mx-2 hover-text-black"/>
      </Link>
      
      {items.map((item, index) => {
        const isCurrent = item.href === currentPath;
        return (
          <div key={index} className="flex items-center">
            <Link
              href={item.href}
              className={`text-[10px] leading-none hover:text-black  ${
                isCurrent ? "text-textPrimary font-bold" : "text-textSecondary font-normal"
              }`}
            >
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="mx-2 text-black">/</span>}
          </div>
        );
      })}
    </nav>
  );
};