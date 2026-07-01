import Breadcrumb from "./Breadcrumb";

/**
 * Shared header for internal pages (Paper 1/2, Mock Tests, Updates):
 * breadcrumb → eyebrow → title → subtitle, all consistently spaced.
 * `crumb` is the short name shown in the breadcrumb trail.
 */
export default function PageHeader({
  crumb,
  eyebrow,
  title,
  subtitle,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header>
      <Breadcrumb current={crumb} />
      <p className="eyebrow mt-6">{eyebrow}</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-[2.125rem]">
        {title}
      </h1>
      <p className="mt-1.5 max-w-2xl text-sm text-muted">{subtitle}</p>
    </header>
  );
}
