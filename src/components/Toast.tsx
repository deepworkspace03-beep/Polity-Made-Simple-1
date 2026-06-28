import { Sparkles, X } from "lucide-react";

/** Small popup shown at the bottom for "coming soon" actions. */
export default function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="animate-toast fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <div className="flex items-center gap-2.5 rounded-full border border-edge bg-card px-4 py-2.5 shadow-lg shadow-black/10">
        <Sparkles size={16} className="shrink-0 text-brand" />
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          aria-label="Dismiss"
          className="ml-1 text-muted transition-colors hover:text-fg"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
