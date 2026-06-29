// Small red "NEW" badge shown beside recently-published updates.
// Visibility is decided by `isUpdateNew()` in src/data/updates.ts
// (automatic for anything published within the last 48 hours).
export default function NewBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md bg-red-500/15 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-red-600 ring-1 ring-inset ring-red-500/30 dark:text-red-400 ${className}`}
    >
      New
    </span>
  );
}
