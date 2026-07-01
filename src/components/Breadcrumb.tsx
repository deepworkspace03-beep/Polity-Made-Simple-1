import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

/**
 * Breadcrumb trail shown at the top of every internal page so visitors can
 * always get back to the homepage in one tap: Home › Current page.
 */
export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md font-medium text-muted transition-colors hover:text-brand"
          >
            <Home size={14} aria-hidden="true" />
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-muted/50">
          <ChevronRight size={14} />
        </li>
        <li aria-current="page" className="font-semibold text-fg">
          {current}
        </li>
      </ol>
    </nav>
  );
}
